import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { PetDto } from './dto/pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private petRepository: Repository<Pet>,
  ) {}

  create(createPetDto: PetDto) {
    return this.petRepository.save(createPetDto);
  }

  findAll(page: number = 1, limit: number = 16, search: string = '') {
    const skip = (page - 1) * limit;
    const basicQuery: FindManyOptions<Pet> = {
      take: limit,
      skip,
      order: { id: 'ASC' },
    };
    if (search === '') {
      return this.petRepository.find(basicQuery);
    }
    return this.petRepository.find({
      ...basicQuery,
      where: [{ name: Like(`%${search}%`) }],
    });
  }

  async getPages(limit: number = 16, search: string = '') {
    const petsNumber = await this.petRepository.count({
      where: [{ name: Like(`%${search}%`) }],
    });
    return Math.ceil(petsNumber / limit);
  }

  async update(id: number, updatePetDto: PetDto) {
    const pet = this.petRepository.find({ where: { id } });
    if (!pet) {
      throw new NotFoundException('Pet not found');
    }
    const result = await this.petRepository.update(id, updatePetDto);
    return result.affected === 1 ? 'Updated' : 'Not found';
  }

  async remove(id: number) {
    const pet = this.petRepository.find({ where: { id } });
    if (!pet) {
      throw new NotFoundException('Pet not found');
    }
    const result = await this.petRepository.delete(id);
    return result.affected === 1 ? 'Deleted' : 'Not found';
  }
}

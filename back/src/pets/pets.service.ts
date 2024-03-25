import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { PetDto } from './dto/pet.dto';
import { PetModel } from './models/pet.model';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(PetModel)
    private petRepository: Repository<PetModel>,
  ) {}

  findAll(page: number = 1, limit: number = 16, search: string = '') {
    const skip = (page - 1) * limit;
    const basicQuery: FindManyOptions<PetModel> = {
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

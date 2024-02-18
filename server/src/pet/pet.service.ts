import { Injectable } from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetService {
  constructor(private readonly prisma: PrismaService) {}

  async create({
    animal,
    birth,
    name,
    ownerId,
    phone,
    race,
  }: CreatePetDTO): Promise<CreatePetDTO> {
    try {
      const createdPet: CreatePetDTO = await this.prisma.pet.create({
        data: { animal, birth, name, ownerId, phone, race },
      });
      return createdPet;
    } catch (error) {
      console.error('Erro ao criar um pet:', error);
      throw new Error(
        'Falha ao criar um pet. Detalhes do erro: ' + error.message,
      );
    }
  }

  async findAll(page: number, pageSize: number): Promise<CreatePetDTO[]> {
    try {
      const skip: number = (page - 1) * pageSize;
      const take: number = pageSize;

      const findPets: CreatePetDTO[] = await this.prisma.pet.findMany({
        skip,
        take,
      });

      return findPets;
    } catch (error) {
      console.error('Erro ao buscar os pets:', error);
      throw new Error(
        'Falha ao buscar os pets. Detalhes do erro: ' + error.message,
      );
    }
  }

  async findOne(id: string): Promise<CreatePetDTO> {
    try {
      const findPet: CreatePetDTO = await this.prisma.pet.findUniqueOrThrow({
        where: { id },
      });

      return findPet;
    } catch (error) {
      console.error('Erro ao buscar o pet:', error);
      throw new Error(
        'Falha ao buscar o pet. Detalhes do erro: ' + error.message,
      );
    }
  }
}

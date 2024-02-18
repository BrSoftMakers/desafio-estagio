import { Injectable } from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutPetDTO } from './dto/update-put-pet.dto';
import { UpdatePatchPetDTO } from './dto/update-patch-pet.dto';
import { DeletePetDTO } from './dto/delete-pet.dto';

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

  async updateOneById(
    id: string,
    updateBody: UpdatePutPetDTO,
  ): Promise<UpdatePutPetDTO> {
    try {
      const updatePet: UpdatePutPetDTO = await this.prisma.pet.update({
        where: { id },
        data: updateBody,
      });

      return updatePet;
    } catch (error) {
      console.error('Erro ao editar o pet:', error);
      throw new Error(
        'Falha ao editar o pet. Detalhes do erro: ' + error.message,
      );
    }
  }

  async editOneById(
    id: string,
    updateBody: UpdatePatchPetDTO,
  ): Promise<UpdatePatchPetDTO> {
    try {
      const updatePet: UpdatePatchPetDTO = await this.prisma.pet.update({
        where: { id },
        data: updateBody,
      });

      return updatePet;
    } catch (error) {
      console.error('Erro ao editar o pet:', error);
      throw new Error(
        'Falha ao editar o pet. Detalhes do erro: ' + error.message,
      );
    }
  }

  async deleteOneById(id: string): Promise<DeletePetDTO> {
    try {
      return await this.prisma.pet.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Erro ao deletar o pet:', error);
      throw new Error(
        'Falha ao deletar o pet. Detalhes do erro: ' + error.message,
      );
    }
  }
}

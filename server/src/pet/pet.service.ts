import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutPetDTO } from './dto/update-put-pet.dto';
import { UpdatePatchPetDTO } from './dto/update-patch-pet.dto';
import { DeletePetDTO } from './dto/delete-pet.dto';
import { FindPetDTO } from './dto/find-pet.dto';

@Injectable()
export class PetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreatePetDTO): Promise<CreatePetDTO> {
    try {
      const createdPet: CreatePetDTO = await this.prisma.pet.create({
        data: body,
      });
      return createdPet;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
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
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string): Promise<FindPetDTO> {
    try {
      const findPet: CreatePetDTO = await this.prisma.pet.findUnique({
        where: { id },
      });

      return findPet;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
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
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
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
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteOneById(id: string): Promise<DeletePetDTO> {
    try {
      return await this.prisma.pet.delete({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

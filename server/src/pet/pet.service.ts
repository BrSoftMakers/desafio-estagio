import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePutPetDTO } from './dto/update-put-pet.dto';
import { UpdatePatchPetDTO } from './dto/update-patch-pet.dto';
import { DeletePetDTO } from './dto/delete-pet.dto';
import { FindPetDTO } from './dto/find-pet.dto';

@Injectable()
export class PetService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body) {
    try {
      const ownerId = await this.prisma.owner.findFirst({
        where: { email: body.email },
      });

      const { animal, name, phone, race, birth } = body;

      const createdPet = await this.prisma.pet.create({
        data: {
          animal,
          name,
          phone,
          race,
          birth,
          ownerId: ownerId.id,
        },
      });

      return createdPet;
    } catch (error) {
      console.error(error);
      throw new BadRequestException(error);
    }
  }

  async findAll(page: number, pageSize: number): Promise<any> {
    try {
      const skip: number = (page - 1) * pageSize;
      const take: number = pageSize;

      const findPets: CreatePetDTO[] = await this.prisma.pet.findMany({
        skip,
        take,
        include: {
          owner: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });

      const totalItems: number = await this.prisma.pet.count();

      const totalPages: number = Math.ceil(totalItems / pageSize);

      return [findPets, totalPages];
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

  async findByName(name: string): Promise<FindPetDTO> {
    try {
      const findByName: FindPetDTO = await this.prisma.pet.findFirstOrThrow({
        where: { name },
      });

      return findByName;
    } catch (error) {
      console.log(error);
      throw new HttpException(`Não encontrado`, HttpStatus.NOT_FOUND);
    }
  }

  async updateOneById(
    id: string,
    updateBody: UpdatePutPetDTO,
  ): Promise<UpdatePutPetDTO> {
    try {
      const { animal, birth, name, phone, race } = updateBody;

      const existingPet = await this.prisma.pet.findUnique({
        where: { id },
      });

      if (!existingPet) {
        throw new HttpException(
          `Pet with id ${id} not found`,
          HttpStatus.NOT_FOUND,
        );
      }

      const updatePet: UpdatePutPetDTO = await this.prisma.pet.update({
        where: { id },
        data: {
          animal,
          birth,
          name,
          phone,
          race,
        },
      });

      return updatePet;
    } catch (error) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
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

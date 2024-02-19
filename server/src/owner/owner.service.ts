import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOwnerDTO } from './dto/create-owner.dto';
import { UpdatePutOwnerDTO } from './dto/update-put-owner.dto';
import { UpdatePatchOwnerDTO } from './dto/update-patch-owner.dto';
import { DeleteOwnerDTO } from './dto/delete-pet.dto';
import { FindOwnerDTO } from './dto/find-owner.dto';

@Injectable()
export class OwnerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateOwnerDTO): Promise<CreateOwnerDTO> {
    try {
      const createdOwner: CreateOwnerDTO = await this.prisma.owner.create({
        data: body,
      });
      return createdOwner;
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error(
        'Falha ao criar um usuário. Detalhes do erro: ' + error.message,
      );
    }
  }

  async findAll(page: number, pageSize: number): Promise<FindOwnerDTO[]> {
    try {
      const skip: number = (page - 1) * pageSize;
      const take: number = pageSize;

      const findAllOwner: FindOwnerDTO[] = await this.prisma.owner.findMany({
        skip,
        take,
      });

      return findAllOwner;
    } catch (error) {
      console.error('Erro ao buscar o usuário:', error);
      throw new Error(
        'Falha ao buscar o usuário. Detalhes do erro: ' + error.message,
      );
    }
  }

  async findOne(id: string): Promise<FindOwnerDTO> {
    try {
      const findOwner: FindOwnerDTO = await this.prisma.owner.findUniqueOrThrow(
        {
          where: { id },
        },
      );

      return findOwner;
    } catch (error) {
      console.error('Erro ao buscar o usuário:', error);
      throw new Error(
        'Falha ao buscar o usuário. Detalhes do erro: ' + error.message,
      );
    }
  }

  async editOneById(
    id: string,
    updateBody: UpdatePutOwnerDTO,
  ): Promise<UpdatePutOwnerDTO> {
    try {
      const updateOwner: UpdatePutOwnerDTO = await this.prisma.owner.update({
        where: { id },
        data: updateBody,
      });

      return updateOwner;
    } catch (error) {
      console.error('Erro ao editar as informações do usuário:', error);
      throw new Error(
        'Falha ao editar as informações do usuário. Detalhes do erro: ' +
          error.message,
      );
    }
  }

  async updateOneById(
    id: string,
    updateBody: UpdatePatchOwnerDTO,
  ): Promise<UpdatePatchOwnerDTO> {
    try {
      const updateOwner: UpdatePatchOwnerDTO = await this.prisma.owner.update({
        where: { id },
        data: updateBody,
      });

      return updateOwner;
    } catch (error) {
      console.error('Erro ao editar as informações do usuário:', error);
      throw new Error(
        'Falha ao editar as informações do usuário. Detalhes do erro: ' +
          error.message,
      );
    }
  }

  async deleteOneById(id: string): Promise<DeleteOwnerDTO> {
    try {
      return await this.prisma.pet.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Erro ao deletar o usuário:', error);
      throw new Error(
        'Falha ao deletar o usuário. Detalhes do erro: ' + error.message,
      );
    }
  }
}

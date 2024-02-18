import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOwnerDTO } from './dto/create-owner.dto';
import { UpdatePutOwnerDTO } from './dto/update-put-owner.dto';
import { UpdatePatchOwnerDTO } from './dto/update-patch-pet.dto';

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
      const updatePet: UpdatePatchOwnerDTO = await this.prisma.owner.update({
        where: { id },
        data: updateBody,
      });

      return updatePet;
    } catch (error) {
      console.error('Erro ao editar as informações do usuário:', error);
      throw new Error(
        'Falha ao editar as informações do usuário. Detalhes do erro: ' +
          error.message,
      );
    }
  }
}

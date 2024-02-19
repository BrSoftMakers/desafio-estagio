import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDTO } from './dto/create-user.dto';
import { FindUserDTO } from './dto/find-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: CreateUserDTO): Promise<CreateUserDTO> {
    try {
      const { email, image, name, permission } = body;
      const createUser: CreateUserDTO = await this.prisma.user.create({
        data: { email, image, name, permission },
      });
      return createUser;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(page: number, pageSize: number): Promise<FindUserDTO[]> {
    try {
      const skip: number = (page - 1) * pageSize;
      const take: number = pageSize;

      const findAllUser: FindUserDTO[] = await this.prisma.user.findMany({
        skip,
        take,
      });

      return findAllUser;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string): Promise<FindUserDTO> {
    try {
      const findUser: FindUserDTO = await this.prisma.user.findUnique({
        where: { id },
      });
      return findUser;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Proprietário não encontrado.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async editOneById(
    id: string,
    updateBody: UpdatePutUserDTO,
  ): Promise<UpdatePutUserDTO> {
    try {
      const updateUser: UpdatePutUserDTO = await this.prisma.user.update({
        where: { id },
        data: updateBody,
      });

      return updateUser;
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
    updateBody: UpdatePatchUserDTO,
  ): Promise<UpdatePatchUserDTO> {
    try {
      const updateUser: UpdatePatchUserDTO = await this.prisma.user.update({
        where: { id },
        data: updateBody,
      });

      return updateUser;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `Erro interno do servidor`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteOneById(id: string): Promise<DeleteUserDTO> {
    try {
      return await this.prisma.user.delete({
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

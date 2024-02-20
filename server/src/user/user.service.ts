import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

import { CreateUserDTO } from './dto/create-user.dto';
import { FindUserDTO } from './dto/find-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';

export interface IUser {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
  permission: 'boss' | 'employee' | 'client';
}

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  private handleServerError(
    error: any,
    message: string = 'Erro interno do servidor',
  ): void {
    console.error(error);
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async create(body: CreateUserDTO): Promise<IUser> {
    try {
      const hashedPassword = await this.hashPassword(body.password);
      const { accounts = [], sessions = [], ...restUserDetails } = body;
      const createdUser = await this.prisma.user.create({
        data: {
          ...restUserDetails,
          password: hashedPassword,
          accounts: { create: accounts },
          sessions: { create: sessions },
        },
        select: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
          permission: true,
        },
      });

      return createdUser;
    } catch (error) {
      this.handleServerError(error);
    }
  }

  async findAll(page: number, pageSize: number): Promise<FindUserDTO[]> {
    try {
      const skip: number = (page - 1) * pageSize;
      const take: number = pageSize;

      return await this.prisma.user.findMany({
        skip,
        take,
      });
    } catch (error) {
      this.handleServerError(error);
    }
  }

  async findOne(id: string): Promise<FindUserDTO> {
    try {
      return await this.prisma.user.findUnique({
        where: { id },
      });
    } catch (error) {
      this.handleServerError(error, 'Proprietário não encontrado.');
    }
  }

  async findAllByName(
    page: number,
    pageSize: number,
    name: string,
  ): Promise<FindUserDTO[]> {
    try {
      const skip: number = (page - 1) * pageSize;
      const take: number = pageSize;

      return await this.prisma.user.findMany({
        skip,
        take,
        where: { name },
      });
    } catch (error) {
      this.handleServerError(error);
    }
  }

  async editOneById(
    id: string,
    updateBody: UpdatePutUserDTO,
  ): Promise<UpdatePutUserDTO> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateBody,
      });
    } catch (error) {
      this.handleServerError(error);
    }
  }

  async updateOneById(
    id: string,
    updateBody: UpdatePatchUserDTO,
  ): Promise<UpdatePatchUserDTO> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data: updateBody,
      });
    } catch (error) {
      this.handleServerError(error);
    }
  }

  async deleteOneById(id: string): Promise<DeleteUserDTO> {
    try {
      return await this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      this.handleServerError(error);
    }
  }
}

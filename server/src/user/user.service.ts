import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDTO } from './dto/create-user.dto';
import { FindUserDTO } from './dto/find-user.dto';

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
}

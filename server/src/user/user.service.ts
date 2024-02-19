import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDTO } from './dto/create-user.dto';

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
}

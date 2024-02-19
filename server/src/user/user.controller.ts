import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';

import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { DeleteUserDTO } from './dto/delete-user.dto';
import { FindUserDTO } from './dto/find-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: CreateUserDTO): Promise<CreateUserDTO> {
    return this.userService.create(body);
  }

  @Get()
  @HttpCode(200)
  async findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<FindUserDTO[]> {
    return this.userService.findAll(Number(page), Number(pageSize));
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param() param): Promise<FindUserDTO> {
    return this.userService.findOne(param);
  }

  @Get(':name')
  @HttpCode(200)
  async findAllByName(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
    @Param('name') name,
  ): Promise<FindUserDTO[]> {
    return this.userService.findAllByName(Number(page), Number(pageSize), name);
  }

  @Put(':id')
  @HttpCode(200)
  async edit(@Body() body, @Param('id') param): Promise<UpdatePutUserDTO> {
    return this.userService.editOneById(param, body);
  }

  @Patch(':id')
  @HttpCode(200)
  async update(@Body() body, @Param('id') param): Promise<UpdatePatchUserDTO> {
    return this.userService.updateOneById(param, body);
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') param): Promise<DeleteUserDTO> {
    return this.userService.deleteOneById(param);
  }
}

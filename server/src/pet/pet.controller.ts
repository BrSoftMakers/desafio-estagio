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
  UseGuards,
} from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';

import { PetService } from './pet.service';
import { UpdatePutPetDTO } from './dto/update-put-pet.dto';
import { UpdatePatchPetDTO } from './dto/update-patch-pet.dto';
import { DeletePetDTO } from './dto/delete-pet.dto';
import { FindPetDTO } from './dto/find-pet.dto';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('/pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @UseGuards(AuthGuard)
  @Post()
  @HttpCode(201)
  async create(@Body() body: CreatePetDTO): Promise<CreatePetDTO> {
    return this.petService.create(body);
  }

  @Get()
  @HttpCode(200)
  async findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<CreatePetDTO[]> {
    return this.petService.findAll(Number(page), Number(pageSize));
  }

  @UseGuards(AuthGuard)
  @Get('find/:name')
  @HttpCode(200)
  async findByName(@Param('name') name): Promise<FindPetDTO> {
    return this.petService.findByName(name);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') param): Promise<FindPetDTO> {
    return this.petService.findOne(param);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  @HttpCode(200)
  async updateById(
    @Param('id') param,
    @Body() body: UpdatePutPetDTO,
  ): Promise<UpdatePutPetDTO> {
    return this.petService.updateOneById(param, body);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  @HttpCode(200)
  async editById(
    @Param('id') param,
    @Body() body: UpdatePatchPetDTO,
  ): Promise<UpdatePatchPetDTO> {
    return this.petService.editOneById(param, body);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(200)
  async deleteById(@Param('id') param): Promise<DeletePetDTO> {
    return this.petService.deleteOneById(param);
  }
}

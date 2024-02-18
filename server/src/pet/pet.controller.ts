import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';

import { PetService } from './pet.service';
import { UpdatePutPetDTO } from './dto/update-put-pet.dto';
import { UpdatePatchPetDTO } from './dto/update-patch-pet.dto';

@Controller('/pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

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

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') param): Promise<CreatePetDTO> {
    return this.petService.findOne(param);
  }

  @Put(':id')
  @HttpCode(200)
  async updateById(
    @Param('id') param,
    @Body() body: UpdatePutPetDTO,
  ): Promise<UpdatePutPetDTO> {
    return this.petService.updateOneById(param, body);
  }

  @Patch(':id')
  @HttpCode(200)
  async editById(
    @Param('id') param,
    @Body() body: UpdatePatchPetDTO,
  ): Promise<UpdatePatchPetDTO> {
    return this.petService.editOneById(param, body);
  }
}

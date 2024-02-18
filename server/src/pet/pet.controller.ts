import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';

import { PetService } from './pet.service';

@Controller('/pet')
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
}

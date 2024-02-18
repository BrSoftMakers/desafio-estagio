import { Body, Controller, HttpCode, Post } from '@nestjs/common';
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
}

import { Pet } from 'src/models/pet.model';
import { PetService } from '../services/pet.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('api/pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  async getAllPets(): Promise<Pet[]> {
    return this.petService.getAllPets();
  }

  @Post()
  async postPet(@Body() postData: Pet): Promise<Pet> {
    return this.petService.createPet(postData);
  }

  @Get(':id')
  async getPet(@Param('id') id: number): Promise<Pet | null> {
    return this.petService.getPetById(id);
  }

  @Delete(':id')
  async deletePet(@Param('id') id: number): Promise<Pet> {
    return this.petService.deletePet(id);
  }

  @Put(':id')
  async updatePet(
    @Param('id') id: number,
    @Body() postData: Pet,
  ): Promise<Pet> {
    return this.petService.updatePet(id, postData);
  }
}

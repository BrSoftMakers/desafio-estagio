import { Body, Controller, Post } from '@nestjs/common';
import { CreatePetService } from 'src/pets/application/use-cases/create-pet/create-pet.service';
import { InputBoundary } from 'src/pets/application/use-cases/create-pet/input.boundary';
import { CreatePetDto } from './create-pet.dto';

@Controller('pets')
export class CreatePetController {
  constructor(private createPetService: CreatePetService) {}
  @Post()
  async create(@Body() body: CreatePetDto): Promise<CreatePetDto> {
    const input = new InputBoundary(
      body.name,
      body.species,
      body.ownerName,
      body.breed,
      body.birthdate,
      body.ownerPhone,
    );
    return await this.createPetService.create(input);
  }
}

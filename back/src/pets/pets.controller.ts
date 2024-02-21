import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PetDto } from './dto/pet.dto';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createPetDto: PetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  findAll(@Query('page') page: number = 1) {
    return this.petsService.findAll(page);
  }

  @Get('pages')
  getPages() {
    return this.petsService.getPages();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: PetDto) {
    return this.petsService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }
}

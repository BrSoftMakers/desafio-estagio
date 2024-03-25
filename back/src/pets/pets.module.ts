import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePetService } from './application/use-cases/create-pet/create-pet.service';
import { CreatePetController } from './infra/controllers/create-pet/create-pet.controller';
import { CreatePetRepository } from './infra/repositories/postgres/create-pet.repository';
import { PetModel } from './models/pet.model';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  imports: [TypeOrmModule.forFeature([PetModel])],
  controllers: [PetsController, CreatePetController],
  providers: [
    PetsService,
    CreatePetService,
    { provide: 'CreatePetRepository', useClass: CreatePetRepository },
  ],
})
export class PetsModule {}

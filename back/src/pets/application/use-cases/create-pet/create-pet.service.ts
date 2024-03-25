import { Inject, Injectable } from '@nestjs/common';
import { Owner } from 'src/pets/domain/entities/owner.entity';
import { Pet } from 'src/pets/domain/entities/pet.entity';
import { CreatePet } from 'src/pets/domain/repositories/create-pet.interface';
import { Phone } from 'src/pets/domain/value-objects/phone.value';
import { Species } from 'src/pets/domain/value-objects/species.value';
import { InputBoundary } from './input.boundary';
import { OutputBoundary } from './output.boundary';

@Injectable()
export class CreatePetService {
  constructor(
    @Inject('CreatePetRepository') private createPetRepository: CreatePet,
  ) {}

  async create(input: InputBoundary): Promise<OutputBoundary> {
    const owner = new Owner(input.ownerName, new Phone(input.ownerPhone));
    const pet = new Pet(
      input.name,
      new Species(input.species),
      owner,
      input.breed,
      new Date(input.birthdate),
    );

    const createdPet = await this.createPetRepository.create(pet);

    return new OutputBoundary(
      createdPet.id,
      createdPet.name,
      createdPet.species,
      createdPet.owner.name,
      createdPet.owner.phone,
      createdPet.breed,
      createdPet.birthdate.toISOString(),
    );
  }
}

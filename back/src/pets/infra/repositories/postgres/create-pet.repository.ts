import { InjectRepository } from '@nestjs/typeorm';
import { Pet } from 'src/pets/domain/entities/pet.entity';
import { CreatePet } from 'src/pets/domain/repositories/create-pet.interface';
import { OwnerModel } from 'src/pets/models/owner.model';
import { PetModel } from 'src/pets/models/pet.model';
import { Repository } from 'typeorm';

export class CreatePetRepository implements CreatePet {
  constructor(
    @InjectRepository(PetModel) private petRepository: Repository<PetModel>,
  ) {}

  // TODO - Separar as responsabilidades de construção e persistência
  async create(pet: Pet): Promise<PetModel> {
    const newOwner = new OwnerModel();
    newOwner.name = pet.owner.name;
    newOwner.phone = pet.owner.phone.value;

    const newPet = new PetModel();
    newPet.name = pet.name;
    newPet.species = pet.species.value;
    newPet.breed = pet.breed;
    newPet.birthdate = pet.birthdate;
    newPet.owner = newOwner;

    return await this.petRepository.save(newPet);
  }
}

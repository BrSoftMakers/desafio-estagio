import { PetModel } from 'src/pets/models/pet.model';
import { Pet } from '../entities/pet.entity';

export interface CreatePet {
  create(pet: Pet): Promise<PetModel>;
}

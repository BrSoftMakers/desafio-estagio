import { CreatePetDTO } from './create-pet.dto';
import { PartialType } from '@nestjs/mapped-types';

export class FindPetDTO extends PartialType(CreatePetDTO) {}

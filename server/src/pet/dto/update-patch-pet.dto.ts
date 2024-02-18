import { CreatePetDTO } from './create-pet.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchPetDTO extends PartialType(CreatePetDTO) {}

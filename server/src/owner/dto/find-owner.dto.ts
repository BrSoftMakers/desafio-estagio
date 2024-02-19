import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerDTO } from './create-owner.dto';

export class FindOwnerDTO extends PartialType(CreateOwnerDTO) {}

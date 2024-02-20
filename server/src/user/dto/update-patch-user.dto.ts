import { PartialType } from '@nestjs/mapped-types';
import { UpdatePutUserDTO } from './update-put-user.dto';

export class UpdatePatchUserDTO extends PartialType(UpdatePutUserDTO) {}

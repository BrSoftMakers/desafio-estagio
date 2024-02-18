import { IsNotEmpty, IsString } from 'class-validator';

export class DeletePetDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}

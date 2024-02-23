import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteOwnerDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}

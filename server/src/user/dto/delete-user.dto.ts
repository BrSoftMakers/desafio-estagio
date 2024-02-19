import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteUserDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}

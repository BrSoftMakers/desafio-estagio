import { IsEmail, IsString } from 'class-validator';

export class CreateOwnerDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

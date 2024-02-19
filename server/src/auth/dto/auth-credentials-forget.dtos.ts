import { IsEmail } from 'class-validator';

export class AuthCredentialForgetDTO {
  @IsEmail()
  email: string;
}

import { IsJWT, IsStrongPassword } from 'class-validator';

export class AuthCredentialsResetDTO {
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  email: string;

  @IsJWT()
  token: string;
}

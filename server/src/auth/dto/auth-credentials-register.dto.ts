import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { AuthCredentialLoginDTO } from './auth-credentials-login.dto';

export class AuthCredentialRegisterDTO extends PartialType(
  AuthCredentialLoginDTO,
) {
  @IsString()
  name: string;

  @IsString()
  permission: string;
}

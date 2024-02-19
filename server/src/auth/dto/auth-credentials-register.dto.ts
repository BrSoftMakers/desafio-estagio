import { IsOptional, IsString } from 'class-validator';
import { CreateUserDTO } from 'src/user/dto/create-user.dto';

export class AuthCredentialRegisterDTO extends CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  image: string;
}

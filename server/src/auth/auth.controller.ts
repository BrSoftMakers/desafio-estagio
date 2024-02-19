import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialLoginDTO } from './dto/auth-credentials-login.dto';
import { AuthCredentialRegisterDTO } from './dto/auth-credentials-register.dto';
import { AuthCredentialForgetDTO } from './dto/auth-credentials-forget.dtos';
import { AuthCredentialsResetDTO } from './dto/auth-credentials-reset.dtos';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly userService: UserService)

  @Post('login')
  async login(@Body() body: AuthCredentialLoginDTO) {}

  @Post('register')
  async register(@Body() body: AuthCredentialRegisterDTO) {
    return this.userService.create(body)
  }

  @Post('forget')
  async forget(@Body() body: AuthCredentialForgetDTO) {}

  @Post('reset')
  async reset(@Body() body: AuthCredentialsResetDTO) {}
}

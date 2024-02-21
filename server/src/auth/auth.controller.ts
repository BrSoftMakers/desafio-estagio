import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthCredentialLoginDTO } from './dto/auth-credentials-login.dto';
import { AuthCredentialRegisterDTO } from './dto/auth-credentials-register.dto';
import { AuthCredentialForgetDTO } from './dto/auth-credentials-forget.dtos';
import { AuthCredentialsResetDTO } from './dto/auth-credentials-reset.dtos';
import { IUser, UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() body: AuthCredentialLoginDTO): Promise<string> {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  async register(@Body() body: AuthCredentialRegisterDTO): Promise<IUser> {
    return this.userService.create(body);
  }

  @Post('forget')
  async forget(
    @Body('email') { email }: AuthCredentialForgetDTO,
  ): Promise<boolean> {
    return this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() body: AuthCredentialsResetDTO) {}
}

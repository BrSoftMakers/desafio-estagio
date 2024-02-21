import { Body, Controller, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { AuthCredentialLoginDTO } from './dto/auth-credentials-login.dto';
import { AuthCredentialRegisterDTO } from './dto/auth-credentials-register.dto';
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
  async forget(@Body('email') email: string): Promise<boolean> {
    return this.authService.forget(email);
  }

  @Patch('reset/:token')
  async reset(@Param('token') token: string, @Body() password) {
    return this.authService.resetPassword(password, token);
  }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { FindUserDTO } from 'src/user/dto/find-user.dto';
import { UserService } from 'src/user/user.service';

interface AuthenticatedRequest extends Request {
  tokenPayload?: object;
  user?: FindUserDTO;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: AuthenticatedRequest = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data: FindUserDTO = await this.authService.checkToken(
        (authorization ?? '').split(' ')[1],
      );

      request.tokenPayload = data;
      request.user = await this.userService.findOne(data.id);

      return true;
    } catch (error) {
      return false;
    }
  }
}

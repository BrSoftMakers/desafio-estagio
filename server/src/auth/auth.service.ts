import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUser, UserService } from 'src/user/user.service';
import { AuthCredentialRegisterDTO } from './dto/auth-credentials-register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  private async createToken(user: IUser): Promise<string> {
    const payload = {
      sub: user.id,
      permission: user.permission,
      imageUrl: user.image,
    };
    const options = {
      expiresIn: '7 days',
    };

    return this.jwtService.sign(payload, options);
  }

  private async comparePasswords(
    providedPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(providedPassword, hashedPassword);
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const user = await this.prisma.user.findFirst({ where: { email } });

      if (!user) {
        throw new HttpException(
          'E-mail e/ou senha incorreto(s).',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const passwordMatch = await this.comparePasswords(
        password,
        user.password,
      );

      if (!passwordMatch) {
        throw new HttpException(
          'E-mail e/ou senha incorreto(s).',
          HttpStatus.UNAUTHORIZED,
        );
      }

      return this.createToken(user);
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Erro interno do servidor',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async register(data: AuthCredentialRegisterDTO): Promise<string> {
    const user: IUser = await this.userService.create(data);
    return this.createToken(user);
  }
}

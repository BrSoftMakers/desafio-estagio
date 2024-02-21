import * as bcrypt from 'bcrypt';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { IUser, UserService } from 'src/user/user.service';
import { AuthCredentialRegisterDTO } from './dto/auth-credentials-register.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly mailer: MailerService,
  ) {}

  private async createToken(user: IUser): Promise<string> {
    const payload = {
      id: user.id,
      permission: user.permission,
      imageUrl: user.image,
    };

    return this.jwtService.sign(payload, {
      expiresIn: '7 days',
      secret: process.env.SECRET_KEY,
    });
  }

  private async comparePasswords(
    providedPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(providedPassword, hashedPassword);
  }

  async resetPassword(password: string, token: string) {
    try {
      const data = this.jwtService.verify(token, {
        secret: process.env.SECRET_KEY,
      });

      const { id } = data;

      const user = await this.prisma.user.update({
        where: { id },
        data: { password },
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async checkToken(token: string): Promise<object> {
    try {
      return await this.jwtService.verify(token, {
        secret: process.env.SECRET_KEY,
      });
    } catch (error) {
      throw new BadRequestException('Token inválido ou expirado.');
    }
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.prisma.user.findFirst({ where: { email } });

    if (!user || !(await this.comparePasswords(password, user.password))) {
      throw new UnauthorizedException('E-mail e/ou senha incorreto(s).');
    }

    return this.createToken(user);
  }

  async register(data: AuthCredentialRegisterDTO): Promise<string> {
    const user: IUser = await this.userService.create(data);
    return this.createToken(user);
  }

  async forget(email: string): Promise<boolean> {
    try {
      const user = await this.prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        throw new UnauthorizedException('E-mail incorreto!');
      }

      const forgetToken = this.jwtService.sign(
        { id: user.id, permission: user.permission, imageUrl: user.image },
        {
          expiresIn: '15min',
          secret: process.env.SECRET_KEY,
        },
      );

      await this.mailer.sendMail({
        subject: 'Recuperar senha',
        to: user.email,
        html: `
        <p>Recuperação de Senha</p>
            <p>Olá ${user.name},</p>
            <p>
              Recebemos uma solicitação para redefinir a senha associada à sua conta. Se
              você não fez essa solicitação, por favor, ignore este e-mail.
            </p>
            <p>Para redefinir sua senha, clique no link abaixo:</p>
            <p><a href="http://localhost:3000/${forgetToken}">LINK</a></p>
            <p>
              Este link é válido por 7 dias, após o qual expirará por motivos de segurança.
            </p>
            <p>
              Por favor, ignore este e-mail se você não solicitou uma redefinição de senha.
              Caso contrário, acesse o link o mais rápido possível para garantir a segurança
              de sua conta.
            </p>
            <p>Se precisar de ajuda ou tiver alguma dúvida, entre em contato conosco.</p>
            <p>Atenciosamente,</p>
            <br />
            <p>Alexsandro Martins</p>
            <p>Desenvolvedor FullStack</p>
        `,
      });

      return true;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}

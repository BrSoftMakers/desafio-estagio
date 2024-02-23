import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [OwnerController],
  providers: [OwnerService, AuthService, JwtService, UserService],
})
export class OwnerModule {}

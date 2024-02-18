import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PetModule } from '../pet/pet.module';
import { OwnerModule } from '../owner/owner.module';

@Module({
  imports: [PrismaModule, PetModule, OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

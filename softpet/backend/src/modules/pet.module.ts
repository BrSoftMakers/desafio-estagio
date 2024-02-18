import { Module } from '@nestjs/common';
import { PetController } from 'src/controllers/pet.controller';
import { PrismaService } from 'src/prisma.service';
import { PetService } from 'src/services/pet.service';

@Module({
  controllers: [PetController],
  providers: [PetService, PrismaService],
})
export class PetModule {}

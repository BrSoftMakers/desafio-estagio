import { Module } from '@nestjs/common';
import { PetsController } from 'src/controllers/pets.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [PetsController],
  providers: [PrismaService]
})
export class PetsModule {}

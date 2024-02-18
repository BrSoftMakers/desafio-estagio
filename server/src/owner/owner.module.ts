import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';

@Module({
  imports: [PrismaModule],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}

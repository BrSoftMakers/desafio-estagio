import { Module } from '@nestjs/common';
import { PetModule } from './modules/pet.module';

@Module({
  imports: [PetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets.module';

@Module({
  imports: [PetsModule]
})
export class AppModule {}

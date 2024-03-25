import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetModel } from './pets/models/pet.model';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'softpet',
      password: '123456',
      database: 'softpetdb',
      entities: [PetModel],
      synchronize: true,
    }),
    PetsModule,
  ],
})
export class AppModule {}

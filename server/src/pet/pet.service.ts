import { Injectable } from '@nestjs/common';
import { CreatePetDTO } from './dto/create-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetService {
  constructor(private readonly prisma: PrismaService) {}

  async create({
    animal,
    birth,
    name,
    ownerId,
    phone,
    race,
  }: CreatePetDTO): Promise<CreatePetDTO> {
    try {
      const createdPet = await this.prisma.pet.create({
        data: { animal, birth, name, ownerId, phone, race },
      });
      return createdPet;
    } catch (error) {
      console.error('Erro ao criar um pet:', error);
      throw new Error(
        'Falha ao criar um pet. Detalhes do erro: ' + error.message,
      );
    }
  }
}

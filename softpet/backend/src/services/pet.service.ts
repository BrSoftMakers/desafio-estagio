import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from 'src/models/pet.model';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  async getAllPets(): Promise<Pet[]> {
    return this.prisma.pet.findMany();
  }

  async getPetById(id: number): Promise<Pet | null> {
    try {
      return this.prisma.pet.findUnique({ where: { id: Number(id) } });
    } catch (error) {
      throw new NotFoundException('Pet not found');
    }
  }

  async createPet(data: Pet): Promise<Pet> {
    return this.prisma.pet.create({
      data,
    });
  }

  async updatePet(id: number, data: Pet): Promise<Pet> {
    try {
      return this.prisma.pet.update({
        where: { id: Number(id) },
        data,
      });
    } catch (error) {
      throw new NotFoundException('Pet not found');
    }
  }

  async deletePet(id: number): Promise<Pet> {
    try {
      return this.prisma.pet.delete({ where: { id: Number(id) } });
    } catch (error) {
      throw new NotFoundException('Pet not found');
    }
  }
}

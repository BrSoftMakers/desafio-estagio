import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PetModel } from './pet.model';

export class OwnerModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @OneToMany(() => PetModel, (pet) => pet.owner, { cascade: true })
  pets: PetModel[];
}

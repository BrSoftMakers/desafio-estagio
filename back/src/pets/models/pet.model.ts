import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OwnerModel } from './owner.model';

@Entity()
export class PetModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  birthdate: Date;

  @ManyToOne(() => OwnerModel, (owner) => owner.pets, { cascade: true })
  owner: OwnerModel;
}

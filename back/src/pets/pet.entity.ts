import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ownerName: string;
}

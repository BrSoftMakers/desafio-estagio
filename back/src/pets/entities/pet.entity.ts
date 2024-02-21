import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  owner: string;

  @Column()
  breed: string;

  @Column()
  phone: string;

  @Column()
  birthdate: Date;
}

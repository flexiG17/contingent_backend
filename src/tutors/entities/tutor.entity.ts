import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tutors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

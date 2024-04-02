import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Tutors {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn({
    comment: 'Дата создания куратора',
  })
  created_at: Date;

  @UpdateDateColumn({
    comment: 'Дата изменения куратора',
  })
  updated_at: Date;
}

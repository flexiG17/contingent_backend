import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Agents {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    comment: 'ФИО агента',
  })
  name: string;

  @Column({
    comment: 'Контактный телефон студента',
  })
  phone_number: string;

  @Column({
    comment: 'Первая эл. почта студента',
  })
  first_email: string;

  @Column({
    comment: 'Вторая эл. почта студента',
  })
  second_email: string;

  @CreateDateColumn({
    comment: 'Дата создания агента',
  })
  created_at: Date;

  @UpdateDateColumn({
    comment: 'Дата изменения агента',
  })
  updated_at: Date;
}

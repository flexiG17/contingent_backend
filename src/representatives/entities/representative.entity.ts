import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Representatives {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    comment: 'ФИО представителя',
  })
  name: string;

  @Column({
    comment: 'Телефон представителя',
  })
  phone_number: string;

  @Column({
    comment: 'Первая эл. почта представителя',
  })
  first_email: string;

  @Column({
    comment: 'Вторая эл. почта представителя',
  })
  second_email: string;

  @CreateDateColumn({
    comment: 'Дата создания представителя',
  })
  created_at: Date;

  @UpdateDateColumn({
    comment: 'Дата изменения представителя',
  })
  updated_at: Date;
}

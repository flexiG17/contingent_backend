import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

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
}

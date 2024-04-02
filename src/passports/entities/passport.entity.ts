import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GenderEnum } from '../../enums/passport/gender.enum';

@Entity()
export class Passports {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    comment: 'Страна',
  })
  country: string;

  @Column({
    type: 'enum',
    enum: GenderEnum,
    comment: 'Пол',
  })
  gender: GenderEnum;

  @Column({
    comment: 'Место рождения',
  })
  birth_place: string;

  @Column({
    comment: 'Гражданство',
  })
  citizenship: string;

  @Column({
    comment: 'Номер паспорта',
  })
  passport_number: string;

  @Column({
    comment: 'Срок действия паспорта',
    nullable: true,
  })
  passport_expiration: Date;

  @Column({
    comment: 'Паспорт выдан в /орган/город',
  })
  passport_issued: string;

  @Column({
    comment: 'Дата выдачи паспорта',
    nullable: true,
  })
  passport_issue_date: Date;
}

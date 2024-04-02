import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OldEducations {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    comment: 'Уровень полученного образования',
  })
  level_education: string;

  @Column({
    comment: 'Наименование учебного заведения',
  })
  name_educational_institution: string;

  @Column({
    comment: 'Местонахождение учебного заведения',
  })
  location_educational_institution: string;

  @Column({
    comment: 'Год окончания',
  })
  graduation_year: number;

  @Column({
    comment: 'Рег. номер направления',
  })
  direction_number: string;
}

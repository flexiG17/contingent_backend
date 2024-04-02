import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  AcademicYearEnum,
  DurationEnum,
  HoursNumberEnum,
} from '../../enums/current-education/educational-program.enum';

@Entity()
export class EducationalPrograms {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    type: 'enum',
    enum: HoursNumberEnum,
    comment: 'Количество часов',
  })
  hours_number: HoursNumberEnum;

  @Column({
    type: 'enum',
    enum: DurationEnum,
    comment: 'Продолжительность обучения',
  })
  duration: DurationEnum;

  @Column({
    type: 'enum',
    enum: AcademicYearEnum,
    comment: 'Продолжительность обучения',
  })
  academic_year: AcademicYearEnum;
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EducationalPrograms } from '../../educational-programs/entities/educational-program.entity';
import {
  EducationTypeEnum,
  FormStudyEnum,
  StartedLearningEnum,
} from '../../enums/current-education/current-education.enum';

@Entity()
export class CurrentEducations {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => EducationalPrograms)
  educational_programs: EducationalPrograms;

  @Column({
    type: 'enum',
    enum: EducationTypeEnum,
    comment: 'Тип обучения',
  })
  type: EducationTypeEnum;

  @Column({
    type: 'enum',
    enum: FormStudyEnum,
    comment: 'Форма обучения',
  })
  form_study: FormStudyEnum;

  @Column({
    type: 'enum',
    enum: StartedLearningEnum,
    comment: 'Приступил к обучению',
  })
  started_learning: StartedLearningEnum;

  @Column({
    comment: 'Дата приступления к обучению',
  })
  date_started_learning: Date;

  @Column({
    comment: 'Уровень желаемого образования',
  })
  desired_level: string;

  @Column({
    comment: 'Код направления подготовки (специальности)',
  })
  specialty_code: string;

  @Column({
    comment: 'Направление подготовки (специальность)',
  })
  specialty_direction: string;

  @Column({
    comment: 'Область образования',
  })
  education_field: string;

  @Column({
    comment: 'Образовательная организация',
  })
  organization: string;
}

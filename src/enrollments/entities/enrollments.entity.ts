import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  Enrollment1CStatus,
  EnrollmentScholarshipStatus,
  EnrollmentStatus,
} from '../../enums/enrollment/enrollment.enum';

@Entity()
export class Enrollments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: EnrollmentStatus,
    comment: 'Статус зачисления',
  })
  status: EnrollmentStatus;

  @Column({
    comment: 'Номер приказа о зачислении',
  })
  order_number: string;

  @Column({
    comment: 'Дата зачисления',
  })
  enrollment_date: Date;

  @Column({
    comment: 'Номер приказа об отчислении',
  })
  expulsion_order: string;

  @Column({
    comment: 'Дата отчисления',
  })
  expulsion_date: Date;

  @Column({
    comment: 'Номер договора',
  })
  contract_number: string;

  @Column({
    type: 'enum',
    enum: Enrollment1CStatus,
    comment: 'Статус 1C',
  })
  status_1c: Enrollment1CStatus;

  @Column({
    type: 'enum',
    enum: EnrollmentScholarshipStatus,
    comment: 'Стипендия',
  })
  scholarship: EnrollmentScholarshipStatus;
}

import {
  Enrollment1CStatusEnum,
  EnrollmentScholarshipStatusEnum,
  EnrollmentStatusEnum,
} from '../../enums/enrollment/enrollment.enum';

export class CreateEnrollmentDto {
  id: string;
  status: EnrollmentStatusEnum;
  order_number: string;
  enrollment_date: Date;
  expulsion_order: string;
  expulsion_date: Date;
  contract_number: string;
  status_1c: Enrollment1CStatusEnum;
  scholarship: EnrollmentScholarshipStatusEnum;
}

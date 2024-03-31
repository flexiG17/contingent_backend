import {
  Enrollment1CStatus,
  EnrollmentScholarshipStatus,
  EnrollmentStatus,
} from '../../enums/enrollment/enrollment.enum';

export class CreateEnrollmentDto {
  id: string;
  status: EnrollmentStatus;
  order_number: string;
  enrollment_date: Date;
  expulsion_order: string;
  expulsion_date: Date;
  contract_number: string;
  status_1c: Enrollment1CStatus;
  scholarship: EnrollmentScholarshipStatus;
}

import {
  enrollment_scholarship,
  enrollment_status,
  enrollment_status_1c,
} from '@prisma/client';

export interface EnrollmentInterface {
  id?: string;
  status: enrollment_status;
  order_number: string;
  enrollment_date: Date;
  expulsion_order: string;
  expulsion_date: Date;
  contract_number: string;
  status_1c: enrollment_status_1c;
  scholarship: enrollment_scholarship;
  student_id?: string;
}

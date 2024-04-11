import { student_payment_type } from '@prisma/client';

export interface StudentPaymentInterface {
  id?: string;
  ordinal: 1 | 2 | 3 | 4;
  type: student_payment_type;
  date: Date;
  amount: number;
  payment_id: string;
}

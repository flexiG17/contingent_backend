import { payment_payment_status, student_payment } from '@prisma/client';

export interface PaymentInterface {
  id?: string;
  contract_amount: number;
  payment_status: payment_payment_status;
  student_payments: student_payment[];
}

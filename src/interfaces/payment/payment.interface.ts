import { payment_payment_status, student_payment } from '@prisma/client';
import { CreateStudentPaymentDto } from './student-payment/create-student-payment.dto';

export interface PaymentInterface {
  id?: string;
  contract_amount: number;
  payment_status: payment_payment_status;
  student_payments: CreateStudentPaymentDto[];
}

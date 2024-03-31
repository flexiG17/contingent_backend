import { PaymentStatusEnum } from '../../enums/payment/payment-status.enum';

export class CreatePaymentDto {
  id: string;
  contract_amount: number;
  payment_status: PaymentStatusEnum;
  first_payment_contract_date: Date;
  second_payment_contract_date: Date;
  third_payment_contract_date: Date;
  fourth_payment_contract_date: Date;
  first_payment_actual_date: Date;
  second_payment_actual_date: Date;
  third_payment_actual_date: Date;
  fourth_payment_actual_date: Date;
  amount_first_actual_payment: number;
  amount_second_actual_payment: number;
  amount_third_actual_payment: number;
  amount_fourth_actual_payment: number;
}

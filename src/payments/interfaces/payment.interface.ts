import { PaymentStatusEnum } from '../../enums/payment/payment-status.enum';

export interface PaymentInterface {
  id: string;
  contract_amount: number;
  payment_status: PaymentStatusEnum;
}

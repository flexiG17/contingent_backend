import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentStatusEnum } from '../../enums/payment/payment-status.enum';
import { StudentPayments } from '../../student-payments/entities/student-payment.entity';

@Entity()
export class Payments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    comment: 'Cумма для оплаты по договору',
  })
  contract_amount: number;

  @Column({
    type: 'enum',
    enum: PaymentStatusEnum,
    comment: 'Статус оплаты',
  })
  payment_status: PaymentStatusEnum;

  @OneToMany(
    () => StudentPayments,
    (studentPayment) => studentPayment.payments,
    {
      cascade: true,
    },
  )
  student_payments: StudentPayments[];
}

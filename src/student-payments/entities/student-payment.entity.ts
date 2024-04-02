import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentTypeEnum } from '../../enums/payment/payment-type.enum';
import { Payments } from '../../payments/entities/payment.entity';

@Entity()
export class StudentPayments {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    comment: 'Номер платежа',
  })
  ordinal: 1 | 2 | 3 | 4;

  @Column({
    type: 'enum',
    enum: PaymentTypeEnum,
    comment: 'Тип платежа',
  })
  type: PaymentTypeEnum;

  @Column({
    comment: 'Дата платежа',
  })
  date: Date;

  @Column({
    comment: 'Размер платежа',
    nullable: true,
  })
  amount: number;

  @ManyToOne(() => Payments, (payment) => payment.student_payments)
  payments: Payments;
}

import { PaymentStatusEnum } from '../../enums/payment/payment-status.enum';
import { PaymentInterface } from './payment.interface';
import {
  current_education_started_learning,
  payment_payment_status,
  student_payment,
} from '@prisma/client';
import { CreateStudentPaymentDto } from './student-payment/create-student-payment.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePaymentDto implements PaymentInterface {
  // id: string;

  @ApiProperty({
    example: 140000,
    description: 'Cумма для оплаты по договору',
  })
  @IsOptional()
  @IsNumber()
  contract_amount: number;

  @ApiProperty({
    example: payment_payment_status.Paid,
    description: 'Статус оплаты студента',
    enum: payment_payment_status,
  })
  @IsEnum(payment_payment_status)
  @IsOptional()
  payment_status: payment_payment_status;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'Платежи студента',
    type: CreateStudentPaymentDto,
    isArray: true,
  })
  @Type(() => CreateStudentPaymentDto)
  student_payments: CreateStudentPaymentDto[];
}

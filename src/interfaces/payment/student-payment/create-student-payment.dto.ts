import { StudentPaymentInterface } from './student-payment.interface';
import { payment_payment_status, student_payment_type } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsISO8601,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class CreateStudentPaymentDto implements StudentPaymentInterface {
  id?: string;

  @ApiProperty({
    example: 1,
    description: 'Номер платежа',
    type: typeof (1 | 2 | 3 | 4),
  })
  @IsNumber()
  ordinal: 1 | 2 | 3 | 4;

  @ApiProperty({
    example: student_payment_type.Actual,
    description: 'Тип платежа',
    enum: student_payment_type,
  })
  @IsEnum(student_payment_type)
  type: student_payment_type;

  @ApiProperty({
    example: new Date(),
    description: 'Дата платежа',
  })
  @IsISO8601()
  date: Date;

  @ApiProperty({
    example: 40000,
    description: 'Размер платежа',
  })
  // ИЗМЕНИТЬ на тип число
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Размер платежа',
  })
  @IsUUID()
  payment_id: string;
}

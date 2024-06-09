import {
  current_education_started_learning,
  enrollment_scholarship,
  enrollment_status,
  enrollment_status_1c,
} from '@prisma/client';
import { EnrollmentInterface } from './enrollment.interfaces';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsISO8601,
  IsOptional,
  IsString,
} from 'class-validator';
import { EnrollmentStatusEnum } from '../../enums/enrollment/enrollment.enum';

export class CreateEnrollmentDto implements EnrollmentInterface {
  // id?: string;
  @ApiProperty({
    example: enrollment_status.Enrolled,
    description: 'student enrollment status',
    enum: enrollment_status,
  })
  @IsEnum(enrollment_status)
  @IsOptional()
  status: enrollment_status;

  @ApiProperty({
    description: 'Номер приказа о зачислении',
  })
  @IsString()
  @IsOptional()
  order_number: string;

  @ApiProperty({
    example: '2024-06-07 08:59:12.530000',
    description: 'Дата зачисления',
  })
  @IsOptional()
  @IsISO8601()
  enrollment_date: Date;

  @ApiProperty({
    description: 'Номер приказа об отчислении',
  })
  @IsString()
  @IsOptional()
  expulsion_order: string;

  @ApiProperty({
    example: '2024-06-07 08:59:12.530000',
    description: 'Дата отчисления',
  })
  @IsOptional()
  @IsISO8601()
  expulsion_date: Date;

  @ApiProperty({
    description: 'Номер договора',
  })
  @IsString()
  @IsOptional()
  contract_number: string;

  @ApiProperty({
    example: enrollment_status_1c.Pinned,
    description: 'статус прикрепления 1c',
    enum: enrollment_status_1c,
  })
  @IsEnum(enrollment_status_1c)
  @IsOptional()
  status_1c: enrollment_status_1c;

  @ApiProperty({
    example: enrollment_scholarship.True,
    description: 'статус прикрепления 1c',
    enum: enrollment_scholarship,
  })
  @IsEnum(enrollment_scholarship)
  @IsOptional()
  scholarship: enrollment_scholarship;

  student_id?: string;
}

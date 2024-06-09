import { current_education_form_study, passport_gender } from '@prisma/client';
import { PassportInterface } from './passport.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsISO8601,
  IsOptional,
  IsPassportNumber,
  IsString,
} from 'class-validator';

export class CreatePassportDto implements PassportInterface {
  @ApiProperty({
    description: 'Страна',
  })
  @IsOptional()
  @IsString()
  country: string;

  @ApiProperty({
    example: passport_gender.Male,
    description: 'Пол',
    enum: passport_gender,
  })
  @IsOptional()
  @IsEnum(passport_gender)
  gender: passport_gender;

  @ApiProperty({
    example: new Date(),
    description: 'Дата рождения',
  })
  @IsISO8601()
  birth_date: Date;

  @ApiProperty({
    description: 'Номер паспорта',
  })
  @IsString()
  // @IsPassportNumber()
  passport_number: string;

  @ApiProperty({
    description: 'Место рождения',
  })
  @IsOptional()
  @IsString()
  birth_place: string;

  @ApiProperty({
    description: 'Гражданство',
  })
  @IsOptional()
  @IsString()
  citizenship: string;

  @ApiProperty({
    example: new Date(),
    description: 'Срок действия паспорта',
  })
  @IsOptional()
  @IsISO8601()
  passport_expiration: Date;

  @ApiProperty({
    example: new Date(),
    description: 'Кем выдан паспорт',
  })
  @IsOptional()
  @IsString()
  passport_issued: string;

  @ApiProperty({
    example: new Date(),
    description: 'Дата выдачи паспорта',
  })
  @IsOptional()
  @IsISO8601()
  passport_issue_date: Date;
  student_id?: string;
}

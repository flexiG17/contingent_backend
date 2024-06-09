import { PassportInterface } from '../../interfaces/passport/passport.interface';
import { AgentInterface } from '../../agents/interfaces/agent.interface';
import { RepresentativeInterface } from '../../representatives/interfaces/representative.interface';
import { CurrentEducationInterface } from '../../interfaces/current-educations/currentEducation.interface';
import { InternationalInfoInterface } from '../../interfaces/international-info/international-info.interface';
import { EnrollmentInterface } from '../../interfaces/enrollment/enrollment.interfaces';
import { PaymentInterface } from '../../interfaces/payment/payment.interface';
import { OldEducationInterface } from '../../interfaces/old-education/old-education.interface';
import { MetadataInterface } from '../../interfaces/metadata/metadata.interface';
import {
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Expose, Type } from 'class-transformer';
import { CreateContactDto } from '../../interfaces/contact/create-contact.dto';
import { CreateCurrentEducationDto } from '../../interfaces/current-educations/create-current-education.dto';
import { CreateInternationalInfoDto } from '../../interfaces/international-info/create-international-info.dto';
import { CreateEnrollmentDto } from '../../interfaces/enrollment/create-enrollment.dto';
import { CreateMetadataDto } from '../../interfaces/metadata/create-metadata.dto';
import { CreateOldEducationDto } from '../../interfaces/old-education/create-old-education.dto';
import { CreatePassportDto } from '../../interfaces/passport/create-passport.dto';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';
import { CreateStudentPaymentDto } from '../../interfaces/payment/student-payment/create-student-payment.dto';
import { CreatePaymentDto } from '../../interfaces/payment/create-payment.dto';
import { StudentInterface } from '../interfaces/student.interface';

export class CreateStudentDto implements StudentInterface {
  // id?: string;
  @ApiProperty({ example: 'Pavel Durov', description: 'student latin name' })
  @IsString()
  latin_name: string;

  @ApiProperty({ example: 'Pavel Durov', description: 'student russian name' })
  @IsOptional()
  @IsString()
  russian_name: string;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student contacts',
    type: CreateContactDto,
    isArray: false,
  })
  @Type(() => CreateContactDto)
  contact: CreateContactDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student current education',
    type: CreateCurrentEducationDto,
    isArray: false,
  })
  @Type(() => CreateCurrentEducationDto)
  current_education: CreateCurrentEducationDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student international info',
    type: CreateInternationalInfoDto,
    isArray: false,
  })
  @Type(() => CreateInternationalInfoDto)
  international_info: CreateInternationalInfoDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student enrollment info',
    type: CreateEnrollmentDto,
    isArray: false,
  })
  @Type(() => CreateEnrollmentDto)
  enrollment: CreateEnrollmentDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student metadata',
    type: CreateMetadataDto,
    isArray: false,
  })
  @Type(() => CreateMetadataDto)
  metadata: CreateMetadataDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student old education',
    type: CreateOldEducationDto,
    isArray: false,
  })
  @Type(() => CreateOldEducationDto)
  old_education: CreateOldEducationDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student passport data',
    type: CreatePassportDto,
    isArray: false,
  })
  @Type(() => CreatePassportDto)
  passport: CreatePassportDto;

  @ValidateNested()
  @IsOptional()
  @ApiProperty({
    description: 'student payment data',
    type: CreatePaymentDto,
    isArray: false,
  })
  @Type(() => CreatePaymentDto)
  payment: CreatePaymentDto;

  @ApiProperty({
    description: 'uuid of representative',
  })
  @IsUUID()
  @IsOptional()
  representative_id: string;

  @ApiProperty({
    description: 'uuid of agent',
  })
  @IsUUID()
  @IsOptional()
  agent_id: string;

  @ApiProperty({
    description: 'uuid of tutor',
  })
  @IsUUID()
  @IsOptional()
  tutor_id: string;
}

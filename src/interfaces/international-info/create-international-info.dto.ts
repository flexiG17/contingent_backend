import { RfLocationEnum } from '../../enums/international-info/rf-location.enum';
import {
  current_education_form_study,
  international_info_RF_location,
} from '@prisma/client';
import { InternationalInfoInterface } from './international-info.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsISO8601,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateInternationalInfoDto implements InternationalInfoInterface {
  // id?: string;
  @ApiProperty({
    example: international_info_RF_location.True,
    description: 'student location in Russia',
    enum: international_info_RF_location,
  })
  @IsEnum(international_info_RF_location)
  @IsOptional()
  RF_location: international_info_RF_location;

  @ApiProperty({
    description: 'Область образования',
  })
  @IsString()
  @IsOptional()
  residence_place: string;

  @ApiProperty({
    description: 'Дата въезда',
  })
  @IsOptional()
  @IsISO8601()
  entry_date: Date;

  @ApiProperty({
    description: 'Дата отъезда',
  })
  @IsOptional()
  @IsISO8601()
  departure_date: Date;

  @ApiProperty({
    description: 'Ориентировочная дата получения приглашения',
  })
  @IsOptional()
  @IsISO8601()
  estimated_receipt_date: Date;

  @ApiProperty({
    description: 'Фактическая дата получения приглашения',
  })
  @IsOptional()
  @IsISO8601()
  actual_receipt_date_invitation: Date;

  @ApiProperty({
    description: 'Откуда пришла заявка',
  })
  @IsString()
  @IsOptional()
  application_source: string;

  @ApiProperty({
    description: 'Срок действия визы',
  })
  @IsOptional()
  @IsISO8601()
  visa_validity: Date;

  @ApiProperty({
    description: 'Дата передачи в международную службу',
  })
  @IsOptional()
  @IsISO8601()
  transfer_to_international_service: Date;

  @ApiProperty({
    description: 'Дата передачи в МВД',
  })
  @IsOptional()
  @IsISO8601()
  transfer_to_MVD: Date;
  student_id?: string;
}

import {
  EducationTypeEnum,
  FormStudyEnum,
  StartedLearningEnum,
} from '../../enums/current-education/current-education.enum';
import {
  IsEnum,
  IsISO8601,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {
  current_education_form_study,
  current_education_started_learning,
  current_education_type,
  user_role,
} from '@prisma/client';
import { CurrentEducationInterface } from './currentEducation.interface';

export class CreateCurrentEducationDto implements CurrentEducationInterface {
  id: string;
  @ApiProperty({ description: 'id of educational program' })
  @IsUUID()
  @IsOptional()
  educational_program_id: string;

  @ApiProperty({
    example: current_education_type.Contract,
    description: 'student educational type',
    enum: current_education_type,
  })
  @IsEnum(current_education_type)
  @IsOptional()
  type: current_education_type;

  @ApiProperty({
    example: current_education_form_study.Offline,
    description: 'student form study',
    enum: current_education_form_study,
  })
  @IsEnum(current_education_form_study)
  @IsOptional()
  form_study: current_education_form_study;

  @ApiProperty({
    example: current_education_started_learning.True,
    description: 'student is started learning',
    enum: current_education_started_learning,
  })
  @IsEnum(current_education_started_learning)
  @IsOptional()
  started_learning: current_education_started_learning;

  @ApiProperty({
    example: '2024-06-07 08:59:12.530000',
    description: 'date when student start learning',
  })
  @IsOptional()
  @IsISO8601()
  date_started_learning: Date;

  @ApiProperty({
    description: 'Уровень желаемого образования',
  })
  @IsString()
  @IsOptional()
  desired_level: string;

  @ApiProperty({
    description: 'Код направления подготовки (специальности)',
  })
  @IsString()
  @IsOptional()
  specialty_code: string;

  @ApiProperty({
    description: 'Направление подготовки (специальность)',
  })
  @IsString()
  @IsOptional()
  specialty_direction: string;

  @ApiProperty({
    description: 'Область образования',
  })
  @IsString()
  @IsOptional()
  education_field: string;

  @ApiProperty({
    description: 'Образовательная организация',
  })
  @IsString()
  @IsOptional()
  organization: string;
}

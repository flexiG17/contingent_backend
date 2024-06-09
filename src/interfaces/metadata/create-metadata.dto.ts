import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { MetadataInterface } from './metadata.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateMetadataDto implements MetadataInterface {
  @ApiProperty({
    description: 'Комеентарии по студенты',
  })
  @IsString()
  @IsOptional()
  comments: string;

  created_at: Date;
  updated_at: Date;

  @ApiProperty({
    example: false,
    description: 'Архивирован студент или нет',
  })
  @IsBoolean()
  @IsOptional()
  is_archived: boolean;

  student_id?: string;
}

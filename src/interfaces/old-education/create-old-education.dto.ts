import { OldEducationInterface } from './old-education.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOldEducationDto implements OldEducationInterface {
  @ApiProperty({
    description: 'Уровень образования',
  })
  @IsOptional()
  @IsString()
  level_education: string;

  @ApiProperty({
    description: 'Наименование учебного заведения',
  })
  @IsOptional()
  @IsString()
  name_educational_institution: string;

  @ApiProperty({
    description: 'Местонахождение учебного заведения',
  })
  @IsOptional()
  @IsString()
  location_educational_institution: string;

  @ApiProperty({
    description: 'Год окончания',
  })
  @IsOptional()
  @IsNumber()
  graduation_year: number;

  @ApiProperty({
    description: 'Рег. номер направления',
  })
  @IsOptional()
  @IsString()
  direction_number: string;
  student_id?: string;
}

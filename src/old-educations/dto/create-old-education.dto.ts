import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CreateOldEducationDto {
  id: string;
  level_education: string;
  name_educational_institution: string;
  location_educational_institution: string;
  graduation_year: number;
  direction_number: string;
}

import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CreateMetadataDto {
  id: string;
  comments: string;
  date_creation: string;
  createdBy: string;
}

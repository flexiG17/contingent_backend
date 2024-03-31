import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { RfLocationEnum } from '../../enums/international-info/rf-location.enum';

export class CreateInternationalInfoDto {
  id: string;
  RF_location: RfLocationEnum;
  residence_place: Date;
  entry_date: Date;
  departure_date: Date;
  estimated_receipt_date: Date;
  actual_receipt_date_invitation: Date;
  application_source: string;
  visa_validity: Date;
  transfer_to_international_service: Date;
  transfer_to_MVD: Date;
}

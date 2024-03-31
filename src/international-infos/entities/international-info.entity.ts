import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RfLocationEnum } from '../../enums/international-info/rf-location.enum';

@Entity()
export class InternationalInfos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: RfLocationEnum,
    comment: 'Нахождение в РФ',
  })
  RF_location: RfLocationEnum;

  @Column({
    comment: 'Место проживания в РФ',
  })
  residence_place: string;

  @Column({
    comment: 'Дата въезда',
  })
  entry_date: Date;

  @Column({
    comment: 'Дата отъезда',
  })
  departure_date: Date;

  @Column({
    comment: 'Ориентировочная дата получения',
  })
  estimated_receipt_date: Date;

  @Column({
    comment: 'Фактическая дата получения приглашения',
  })
  actual_receipt_date_invitation: Date;

  @Column({
    comment: 'Откуда пришла заявка',
  })
  application_source: string;

  @Column({
    comment: 'Срок действия визы',
  })
  visa_validity: Date;

  @Column({
    comment: 'Дата передачи в международную службу',
  })
  transfer_to_international_service: Date;

  @Column({
    comment: 'Дата передачи в МВД',
  })
  transfer_to_MVD: Date;
}

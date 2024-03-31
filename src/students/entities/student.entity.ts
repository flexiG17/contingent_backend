import {
  Column, CreateDateColumn,
  Entity, Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Passports } from '../../passports/entities/passport.entity';
import { Contacts } from '../../contacts/entities/contact.entity';
import { Agents } from '../../agents/entities/agent.entity';
import { Representatives } from '../../representatives/entities/representative.entity';
import { CurrentEducations } from '../../current-educations/entities/current-education.entity';
import { InternationalInfos } from '../../international-infos/entities/international-info.entity';
import { Enrollments } from '../../enrollments/entities/enrollments.entity';
import { Payments } from '../../payments/entities/payment.entity';
import { OldEducations } from '../../old-educations/entities/old-education.entity';
import { Metadatas } from '../../metadatas/entities/metadata.entity';
import { EducationalPrograms } from '../../educational-programs/entities/educational-program.entity';

@Entity()
export class Students {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  ordinal: Date;

  @OneToOne(() => Contacts, {
    cascade: true,
  })
  @JoinColumn()
  contact: Contacts;

  @ManyToOne(() => Agents)
  agent: Agents;

  @ManyToOne(() => Representatives)
  representative: Representatives;

  @OneToOne(() => CurrentEducations, {
    cascade: true,
  })
  @JoinColumn()
  current_education: CurrentEducations;

  @OneToOne(() => InternationalInfos, {
    cascade: true,
  })
  @JoinColumn()
  international_info: InternationalInfos;

  @OneToOne(() => Passports, {
    cascade: true,
  })
  @JoinColumn()
  passport: Passports;

  @OneToOne(() => Enrollments, {
    cascade: true,
  })
  @JoinColumn()
  enrollment: Enrollments;

  @OneToOne(() => Payments, {
    cascade: true,
  })
  @JoinColumn()
  payment: Payments;

  @OneToOne(() => OldEducations, {
    cascade: true,
  })
  @JoinColumn()
  old_education: OldEducations;

  @OneToOne(() => Metadatas, {
    cascade: true,
  })
  @JoinColumn()
  metadata: Metadatas;

  @Column({
    comment: 'ФИО (лат.)',
  })
  latin_name: string;

  @Column({
    comment: 'ФИО (кир.)',
  })
  russian_name: string;
}

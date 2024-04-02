import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
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
import { Tutors } from '../../tutors/entities/tutor.entity';
import { agent } from 'supertest';

@Entity()
export class Students {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @OneToOne(() => Contacts, {
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  contact: Contacts;

  @ManyToOne(() => Agents, {
    cascade: true,
    eager: true,
  })
  agent: Agents;

  @ManyToOne(() => Representatives, {
    cascade: true,
    eager: true,
  })
  representative: Representatives;

  @ManyToOne(() => Tutors, {
    cascade: true,
    eager: true,
  })
  tutor: Tutors;

  @OneToOne(() => CurrentEducations, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  current_education: CurrentEducations;

  @OneToOne(() => InternationalInfos, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  international_info: InternationalInfos;

  @OneToOne(() => Passports, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  passport: Passports;

  @OneToOne(() => Enrollments, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  enrollment: Enrollments;

  @OneToOne(() => Payments, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  payment?: Payments;

  @OneToOne(() => OldEducations, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  old_education: OldEducations;

  @OneToOne(() => Metadatas, {
    cascade: true,
    eager: true,
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

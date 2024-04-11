import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContactInterface } from '../../interfaces/contact.interface';
import { InternationalInfoInterface } from '../../interfaces/international-info.interface';
import { PassportInterface } from '../../interfaces/passport.interface';
import { EnrollmentInterface } from '../../interfaces/enrollment.interfaces';
import { OldEducationInterface } from '../../interfaces/old-education.interface';
import { AgentInterface } from '../../agents/interfaces/agent.interface';
import { RepresentativeInterface } from '../../representatives/interfaces/representative.interface';
import { TutorInterface } from '../../tutors/interfaces/tutor.interface';
import { CurrentEducationInterface } from '../../current-educations/interfaces/currentEducation.interface';
import { PaymentInterface } from '../../payments/interfaces/payment.interface';
import { MetadataInterface } from '../../metadatas/interfaces/metadata.interface';

@Entity()
export class StudentInterface {
  @PrimaryGeneratedColumn('uuid')
  id?: string;
  contact: ContactInterface;
  agent: AgentInterface;
  representative: RepresentativeInterface;
  tutor: TutorInterface;
  current_education: CurrentEducationInterface;
  international_info: InternationalInfoInterface;
  passport: PassportInterface;
  enrollment: EnrollmentInterface;
  payment?: PaymentInterface;
  old_education: OldEducationInterface;
  metadata: MetadataInterface;
  latin_name: string;
  russian_name: string;
}

import { PassportInterface } from '../../interfaces/passport.interface';
import { ContactInterface } from '../../interfaces/contact.interface';
import { AgentInterface } from '../../agents/interfaces/agent.interface';
import { RepresentativeInterface } from '../../representatives/interfaces/representative.interface';
import { CurrentEducationInterface } from '../../current-educations/interfaces/currentEducation.interface';
import { InternationalInfoInterface } from '../../interfaces/international-info.interface';
import { EnrollmentInterface } from '../../interfaces/enrollment.interfaces';
import { PaymentInterface } from '../../payments/interfaces/payment.interface';
import { OldEducationInterface } from '../../interfaces/old-education.interface';
import { MetadataInterface } from '../../metadatas/interfaces/metadata.interface';

export class CreateStudentDto {
  id?: string;
  latin_name: string;
  russian_name: string;
  contact: ContactInterface;
  current_education: CurrentEducationInterface;
  international_info: InternationalInfoInterface;
  enrollment: EnrollmentInterface;
  metadata: MetadataInterface;
  old_education: OldEducationInterface;
  passport: PassportInterface;
  payment: PaymentInterface;
  representative_id: string;
  agent_id: string;
  tutor_id: string;
}

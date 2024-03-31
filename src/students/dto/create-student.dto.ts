import { PassportInterface } from '../../passports/interfaces/passport.interface';
import { ContactInterface } from '../../contacts/interfaces/contact.interface';
import { AgentInterface } from '../../agents/interfaces/agent.interface';
import { RepresentativeInterface } from '../../representatives/interfaces/representative.interface';
import { CurrentEducationInterface } from '../../current-educations/interfaces/currentEducation.interface';
import { InternationalInfoInterface } from '../../international-infos/interfaces/international-info.interface';
import { EnrollmentInterface } from '../../enrollments/interfaces/enrollment.interfaces';
import { PaymentInterface } from '../../payments/interfaces/payment.interface';
import { OldEducationInterface } from '../../old-educations/interfaces/old-education.interface';
import { MetadataInterface } from '../../metadatas/interfaces/metadata.interface';

export class CreateStudentDto {
  contact: ContactInterface;
  representative: RepresentativeInterface;
  current_education: CurrentEducationInterface;
  international_info: InternationalInfoInterface;
  passport: PassportInterface;
  enrollment: EnrollmentInterface;
  payment: PaymentInterface;
  old_education: OldEducationInterface;
  metadata: MetadataInterface;
  agent: AgentInterface;
  latin_name: string;
  russian_name: string;
}

import { InternationalInfoInterface } from '../../interfaces/international-info/international-info.interface';
import { PassportInterface } from '../../interfaces/passport/passport.interface';
import { EnrollmentInterface } from '../../interfaces/enrollment/enrollment.interfaces';
import { OldEducationInterface } from '../../interfaces/old-education/old-education.interface';
import { AgentInterface } from '../../agents/interfaces/agent.interface';
import { RepresentativeInterface } from '../../representatives/interfaces/representative.interface';
import { TutorInterface } from '../../tutors/interfaces/tutor.interface';
import { CurrentEducationInterface } from '../../interfaces/current-educations/currentEducation.interface';
import { PaymentInterface } from '../../interfaces/payment/payment.interface';
import { MetadataInterface } from '../../interfaces/metadata/metadata.interface';
import { ContactInterface } from '../../interfaces/contact/contact.interface';

export interface StudentInterface {
  id?: string;
  contact: ContactInterface;
  agent?: AgentInterface;
  representative?: RepresentativeInterface;
  tutor?: TutorInterface;
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

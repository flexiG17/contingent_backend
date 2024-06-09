import {
  current_education_form_study,
  current_education_started_learning,
  current_education_type,
} from '@prisma/client';

export class CurrentEducationInterface {
  id?: string;
  educational_program_id: string;
  type: current_education_type;
  form_study: current_education_form_study;
  started_learning: current_education_started_learning;
  date_started_learning: Date;
  desired_level: string;
  specialty_code: string;
  specialty_direction: string;
  education_field: string;
  organization: string;
  student_id?: string;
}

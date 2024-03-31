import {
  EducationTypeEnum,
  FormStudyEnum,
  StartedLearningEnum,
} from '../../enums/current-education/current-education.enum';

export class CreateCurrentEducationDto {
  id: string;
  educational_programs_id: string;
  type: EducationTypeEnum;
  form_study: FormStudyEnum;
  started_learning: StartedLearningEnum;
  date_started_learning: Date;
  desired_level: string;
  specialty_code: string;
  specialty_direction: string;
  education_field: string;
  organization: string;
}

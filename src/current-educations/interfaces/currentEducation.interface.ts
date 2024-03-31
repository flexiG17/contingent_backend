import {
  EducationTypeEnum,
  FormStudyEnum,
  StartedLearningEnum,
} from '../../enums/current-education/current-education.enum';
import { EducationProgramInterface } from '../../educational-programs/interfaces/educationProgram.interface';

export interface CurrentEducationInterface {
  id: string;
  educationalProgramsId: string;
  type: EducationTypeEnum;
  form_study: FormStudyEnum;
  started_learning: StartedLearningEnum;
  date_started_learning: Date;
  desired_level: string;
  specialty_code: string;
  specialty_direction: string;
  education_field: string;
  organization: string;

  program: EducationProgramInterface;
}

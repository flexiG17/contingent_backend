import {
  AcademicYearEnum,
  DurationEnum,
  HoursNumberEnum,
} from '../../enums/current-education/educational-program.enum';

export interface EducationProgramInterface {
  id: string;
  hours_number: HoursNumberEnum;
  duration: DurationEnum;
  academic_year: AcademicYearEnum;
}

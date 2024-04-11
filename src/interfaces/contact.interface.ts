import { StudentInterface } from '../students/interfaces/student.interface';

export interface ContactInterface {
  id?: string;
  contact: StudentInterface;
  phone_number: string;
  first_email: string;
  second_email: string;
  student_id?: string;
}

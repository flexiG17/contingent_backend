import { passport_gender } from '@prisma/client';

export interface PassportInterface {
  id?: string;
  country: string;
  gender: passport_gender;
  birth_place: string;
  citizenship: string;
  passport_number: string;
  passport_expiration: Date;
  passport_issued: string;
  passport_issue_date: Date;
  student_id?: string;
}

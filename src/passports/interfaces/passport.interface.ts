import { GenderEnum } from '../../enums/passport/gender.enum';

export interface PassportInterface {
  id: string;
  country: string;
  gender: GenderEnum;
  birth_place: string;
  citizenship: string;
  passport_number: string;
  passport_expiration: Date;
  passport_issued: string;
  passport_issue_date: Date;
}

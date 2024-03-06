import { UserRoles } from '../interfaces/user.interface';

export class CreateUserDto {
  id: string;
  name: string;
  mail: string;
  password: string;
  role: UserRoles;
  date_creation: Date;
  created_by: string;
}

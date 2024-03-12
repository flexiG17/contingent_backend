import { UserRole } from '../../enums/role.enum';

export class CreateUserDto {
  id: string;
  name: string;
  mail: string;
  password: string;
  role: UserRole;
  date_creation: Date;
  created_by: string;
}

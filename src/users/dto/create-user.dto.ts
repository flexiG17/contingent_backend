import { UserRole } from '../../enums/role.enum';

export class CreateUserDto {
  id: string;
  name: string;
  mail: string;
  password: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
  created_by: string;
}

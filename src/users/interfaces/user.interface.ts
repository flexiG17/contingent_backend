import { UserRole } from '../../enums/role.enum';

export interface UserInterface {
  id: string;
  createdById: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  created_at: Date;
}

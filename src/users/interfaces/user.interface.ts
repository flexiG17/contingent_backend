import { UserRole } from '../../enums/role.enum';

export interface UserInterface {
  id: string;
  created_by_id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
}

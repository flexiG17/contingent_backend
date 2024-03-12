import { UserRole } from '../../enums/role.enum';

export interface UserInterface {
  id: string;
  createdById: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  date_creation: Date;
}

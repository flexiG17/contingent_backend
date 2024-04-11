import { user_role } from '@prisma/client';

export class CreateUserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  role: user_role;
  created_at: Date;
  updated_at: Date;
  created_by_id: string;
}

import { file_section, user, student } from '@prisma/client';

export interface FileInterface {
  id?: string;
  name: string;
  size: number;
  path: string;
  section: file_section;
  created_at?: Date;
  updated_at?: Date;
  created_by_id: string;
  user?: user;
  student_id: string;
  student?: student;
}

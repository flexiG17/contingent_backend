export interface MetadataInterface {
  id?: string;
  comments: string;
  created_at: Date;
  updated_at: Date;
  created_by_id?: string;
  is_archived: boolean;
  student_id?: string;
}

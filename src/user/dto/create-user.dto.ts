enum Roles {
  ADMIN = 'Администратор',
  EDITOR = 'Редактор',
  VIEWER = 'Читатель',
}

export class CreateUserDto {
  id: string;
  name: string;
  mail: string;
  password: string;
  role: Roles;
  date_creation: Date;
  created_by: string;
}

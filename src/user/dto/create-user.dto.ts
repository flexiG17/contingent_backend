enum Roles {
  ADMIN = 'Администратор',
  EDITOR = 'Редактор',
  VIEWER = 'Читатель',
}

export class CreateUserDto {
  user_name: string;
  user_email: string;
  user_password: string;
  user_role: Roles;
  user_date_creation: Date;
  //user_who_created: number;
}

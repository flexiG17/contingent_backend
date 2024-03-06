export enum UserRoles {
  ADMIN = 'Администратор',
  EDITOR = 'Редактор',
  VIEWER = 'Читатель',
}

export interface UserInterface {
  id: string;
  createdById: string;
  name: string;
  email: string;
  password: string;
  role: UserRoles;
  date_creation: Date;
}

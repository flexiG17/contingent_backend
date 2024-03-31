import { Request } from 'express';
import { UserInterface } from '../users/interfaces/user.interface';
export interface IRequestWithUser extends Request {
  user: UserInterface;
}

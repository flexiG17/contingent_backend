import { Request } from 'express';
import { UserInterface } from '../user/interfaces/user.interface';
export interface IRequestWithUser extends Request {
  user: UserInterface;
}

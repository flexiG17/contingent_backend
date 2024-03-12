import { PartialType } from '@nestjs/mapped-types';
import { UpdateUserDto } from './update-user.dto';

export class ChangeUserPasswordDto extends PartialType(UpdateUserDto) {
  oldPassword!: string;
}

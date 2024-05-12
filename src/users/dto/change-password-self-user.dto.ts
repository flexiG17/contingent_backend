import { ApiProperty } from '@nestjs/swagger';
import { IsStrongPassword } from 'class-validator';

export class ChangeUserPasswordDto {
  @ApiProperty({ example: '11111111', description: 'user password' })
  @IsStrongPassword()
  password!: string;
  @ApiProperty({ example: '11111111', description: 'user password' })
  @IsStrongPassword()
  oldPassword!: string;
}

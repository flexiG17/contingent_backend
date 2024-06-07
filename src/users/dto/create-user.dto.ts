import { user_role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  /*@ApiProperty({
    example: '253abf81-f28d-11ee-bebb-50ebf6992398',
    description: 'uuid id',
  })
  @IsNumber()
  id: string;*/
  @ApiProperty({ example: 'Pavel Durov', description: 'user name' })
  @IsString()
  name: string;
  @ApiProperty({ example: 'pavel.durev@gmail.com', description: 'user email' })
  @IsEmail()
  email: string;
  @ApiProperty({ example: '11111111', description: 'user password' })
  @IsStrongPassword({
    minLength: 4,
    minNumbers: 2
  })
  password: string;
  @ApiProperty({
    example: user_role.Admin,
    description: 'user role',
    enum: user_role,
  })
  @IsEnum(user_role)
  role: user_role;
  created_at: Date;
  updated_at: Date;
  created_by_id: string;
}

import { StudentInterface } from '../../students/interfaces/student.interface';
import {
  IsEmail,
  IsMobilePhone,
  IsOptional,
  IsPhoneNumber,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ContactInterface } from './contact.interface';

export class CreateContactDto implements ContactInterface {
  /*@IsUUID()
  id?: string;*/
  contact: StudentInterface;

  @ApiProperty({ example: '8800553535', description: 'student phone number' })
  @IsMobilePhone()
  @IsOptional()
  phone_number: string;

  @ApiProperty({
    example: 'first@email.com',
    description: 'first student email',
  })
  @IsEmail()
  @IsOptional()
  first_email: string;

  @ApiProperty({
    example: 'second@email.com',
    description: 'second student email',
  })
  @IsEmail()
  @IsOptional()
  second_email: string;

  student_id?: string;
}

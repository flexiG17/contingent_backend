import { RepresentativeInterface } from '../interfaces/representative.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';

export class CreateRepresentativeDto implements RepresentativeInterface {
  @ApiProperty({ example: 'Khaled Salah', description: 'Agent name' })
  @IsString()
  name: string;

  @ApiProperty({ example: '8800553535', description: 'Agent phone number' })
  @IsMobilePhone()
  @IsOptional()
  phone_number: string;

  @ApiProperty({
    example: 'first@email.com',
    description: 'first agent email',
  })
  @IsEmail()
  @IsOptional()
  first_email: string;

  @ApiProperty({
    example: 'second@email.com',
    description: 'second agent email',
  })
  @IsEmail()
  @IsOptional()
  second_email: string;
}

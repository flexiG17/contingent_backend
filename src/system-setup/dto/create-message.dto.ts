import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty({
    description: 'Заголовок поля "от кого"',
  })
  @IsString()
  from: string;

  @ApiProperty({
    description: 'Список почт для рассылки',
    example: ['test@mail.ru', 'testtest@gmail.com'],
  })
  @IsArray()
  to: string[];

  @ApiProperty({
    description: 'Тема письма',
    example: 'Оплата задолженностей',
  })
  @IsString()
  subject: string;

  @ApiProperty({
    description: 'Текст письма',
  })
  @IsString()
  text: string;

  @ApiProperty({
    description: 'Файлы письма',
  })
  @IsOptional()
  @IsString()
  files: File[];
}

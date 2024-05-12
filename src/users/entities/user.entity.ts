import { UserRole } from '../../enums/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: '', description: 'uuid id' })
  id: string;

  @ApiProperty({ example: 'Pavel Durov', description: 'user name' })
  name: string;

  @ApiProperty({ example: 'pavel.durev@gmail.com', description: 'user email' })
  email: string;

  @ApiProperty({ example: '11111111', description: 'user password' })
  password: string;

  @ApiProperty({ example: 'Admin', description: 'user role' })
  role: UserRole;

  @ApiProperty({
    example: '2024-04-04T19:10:28.000Z',
    description: 'user created at',
  })
  created_at: Date;

  @ApiProperty({
    example: '2024-04-04T19:10:28.000Z',
    description: 'user update at',
  })
  updated_at: Date;

  @ApiProperty({ example: User, description: 'user created by' })
  user: User;
}

import { Module } from '@nestjs/common';
import { StudentsModule } from './student/students.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'admin_redesign',
      entities: [Users],
      synchronize: true,
    }),
    StudentsModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}

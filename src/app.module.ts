import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './students/student.module';
import * as process from 'process';
import { SystemSetupModule } from './system-setup/system-setup.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    StudentModule,
    SystemSetupModule,
    FileModule,
  ],
})
export class AppModule {}

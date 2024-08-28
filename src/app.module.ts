import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './students/student.module';
import * as process from 'process';
import { SystemSetupModule } from './system-setup/system-setup.module';
import { FileModule } from './file/file.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { AgentModule } from './agents/agent.module';
import { RepresentativeModule } from './representatives/representative.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UserModule,
    AgentModule,
    RepresentativeModule,
    AuthModule,
    StudentModule,
    SystemSetupModule,
    FileModule,
    MailerModule.forRoot({
      transport: {
        port: 25,
        secure: false,
        logger: true,
        debug: true,
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
  ],
})
export class AppModule {}

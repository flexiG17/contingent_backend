import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ContactsModule } from './contacts/contacts.module';
import { StudentModule } from './students/student.module';
import { AgentModule } from './agents/agent.module';
import * as process from 'process';
import { Agents } from './agents/entities/agent.entity';
import { RepresentativeModule } from './representatives/representative.module';
import { Representatives } from './representatives/entities/representative.entity';
import { CurrentEducationModule } from './current-educations/current-education.module';
import { CurrentEducations } from './current-educations/entities/current-education.entity';
import { EducationalProgramModule } from './educational-programs/educational-program.module';
import { EducationalPrograms } from './educational-programs/entities/educational-program.entity';
import { InternationalInfoModule } from './international-infos/international-info.module';
import { InternationalInfos } from './international-infos/entities/international-info.entity';
import { PassportModule } from './passports/passport.module';
import { Passports } from './passports/entities/passport.entity';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { Enrollments } from './enrollments/entities/enrollments.entity';
import { PaymentsModule } from './payments/payments.module';
import { Payments } from './payments/entities/payment.entity';
import { OldEducationModule } from './old-educations/old-education.module';
import { OldEducations } from './old-educations/entities/old-education.entity';
import { MetadataModule } from './metadatas/metadata.module';
import { Metadatas } from './metadatas/entities/metadata.entity';
import { TutorsModule } from './tutors/tutors.module';
import { Tutors } from './tutors/entities/tutor.entity';
import { StudentPaymentModule } from './student-payments/student-payment.module';
import { StudentPayments } from './student-payments/entities/student-payment.entity';
import { Students } from './students/entities/student.entity';
import { Contacts } from './contacts/entities/contact.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Users,
        Students,
        Contacts,
        Agents,
        Representatives,
        CurrentEducations,
        EducationalPrograms,
        InternationalInfos,
        Passports,
        Enrollments,
        Payments,
        StudentPayments,
        OldEducations,
        Metadatas,
        Tutors,
      ],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ContactsModule,
    StudentModule,
    AgentModule,
    RepresentativeModule,
    CurrentEducationModule,
    EducationalProgramModule,
    InternationalInfoModule,
    PassportModule,
    EnrollmentsModule,
    PaymentsModule,
    OldEducationModule,
    MetadataModule,
    TutorsModule,
    StudentPaymentModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { SystemSetupController } from './system-setup.controller';
import { SystemSetupService } from './system-setup.service';
import { PrismaService } from '../prisma.service';
import { StudentService } from '../students/student.service';
import { StudentModule } from '../students/student.module';
import { FileService } from '../file/file.service';

@Module({
  imports: [StudentModule],
  controllers: [SystemSetupController],
  providers: [SystemSetupService, PrismaService, StudentService, FileService],
})
export class SystemSetupModule {}

import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from '../prisma.service';
import { FileService } from '../file/file.service';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService, PrismaService, FileService],
})
export class StudentModule {}

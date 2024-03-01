import { All, Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { Student } from './interfaces/student.interface';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post('create')
  async create(@Body() createStudentDto: CreateStudentDto) {
    this.studentService.create(createStudentDto);
  }
  @Get('get')
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.findAll();
  }
  @All('')
  defaultPath(): string {
    return 'стандартный путь';
  }
}

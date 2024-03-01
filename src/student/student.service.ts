import { Injectable } from '@nestjs/common';
import { Student } from './interfaces/student.interface';

@Injectable()
export class StudentService {
  private readonly students: Student[] = [
    { name: 'Первый', year: 2002, country: 'Russia' },
  ];
  create(student: Student) {
    this.students.push(student);
  }
  findAll(): Student[] {
    return this.students;
  }
}

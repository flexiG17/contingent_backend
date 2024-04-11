import { Injectable } from '@nestjs/common';
import { CreateEducationalProgramDto } from './dto/create-educational-program.dto';
import { UpdateEducationalProgramDto } from './dto/update-educational-program.dto';

@Injectable()
export class EducationalProgramService {
  constructor() {}
  create(createEducationalProgramDto: CreateEducationalProgramDto) {
    return 'This action adds a new educationalProgram';
  }

  findAll() {
    return `This action returns all educationalPrograms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} educationalProgram`;
  }

  update(id: number, updateEducationalProgramDto: UpdateEducationalProgramDto) {
    return `This action updates a #${id} educationalProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} educationalProgram`;
  }
}

import {Injectable, Req} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from './entities/student.entity';
import { Repository } from 'typeorm';
import {IRequestWithUser} from "../interfaces/Request.interface";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Students)
    private readonly studentRepository: Repository<Students>,
  ) {}
  create(createStudentDto: CreateStudentDto, @Req() req: IRequestWithUser) {
    return this.studentRepository.save({
      ...createStudentDto,
      metadata: {
        ...createStudentDto.metadata,
        created_by: req.user.id,
      },
    });
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}

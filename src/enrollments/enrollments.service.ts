import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollments } from './entities/enrollments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollments)
    private readonly enrollmentRepository = Repository<Enrollments>,
  ) {}
  create(createEnrollmentDto: CreateEnrollmentDto) {
    return 'This action adds a new enrollments';
  }

  findAll() {
    return `This action returns all enrollments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollment`;
  }

  update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    return `This action updates a #${id} enrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}

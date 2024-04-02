import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from '../students/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SystemSetupService {
  constructor(
    @InjectRepository(Students)
    private readonly systemSetupRepository: Repository<Students>,
  ) {}

  findColumns() {
    return 'haha';
  }
}

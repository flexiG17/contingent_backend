import { Injectable } from '@nestjs/common';
import { CreateOldEducationDto } from './dto/create-old-education.dto';
import { UpdateOldEducationDto } from './dto/update-old-education.dto';

@Injectable()
export class OldEducationService {
  create(createOldEducationDto: CreateOldEducationDto) {
    return 'This action adds a new oldEducation';
  }

  findAll() {
    return `This action returns all oldEducation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oldEducation`;
  }

  update(id: number, updateOldEducationDto: UpdateOldEducationDto) {
    return `This action updates a #${id} oldEducation`;
  }

  remove(id: number) {
    return `This action removes a #${id} oldEducation`;
  }
}

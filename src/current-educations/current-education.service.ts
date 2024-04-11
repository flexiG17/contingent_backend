import { Injectable } from '@nestjs/common';
import { CreateCurrentEducationDto } from './dto/create-current-education.dto';
import { UpdateCurrentEducationDto } from './dto/update-current-education.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CurrentEducationService {
  constructor() {}
  create(createCurrentEducationDto: CreateCurrentEducationDto) {
    return 'This action adds a new current-educations';
  }

  findAll() {
    return `This action returns all currentEducation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} currentEducation`;
  }

  update(id: number, updateCurrentEducationDto: UpdateCurrentEducationDto) {
    return `This action updates a #${id} currentEducation`;
  }

  remove(id: number) {
    return `This action removes a #${id} currentEducation`;
  }
}

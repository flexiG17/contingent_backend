import { Injectable } from '@nestjs/common';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Representatives } from './entities/representative.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepresentativeService {
  constructor(
    @InjectRepository(Representatives)
    private readonly representativeRepository: Repository<Representatives>,
  ) {}
  create(createRepresentativeDto: CreateRepresentativeDto) {
    return 'This action adds a new representatives';
  }

  findAll() {
    return `This action returns all representative`;
  }

  findOne(id: number) {
    return `This action returns a #${id} representative`;
  }

  update(id: number, updateRepresentativeDto: UpdateRepresentativeDto) {
    return `This action updates a #${id} representative`;
  }

  remove(id: number) {
    return `This action removes a #${id} representative`;
  }
}

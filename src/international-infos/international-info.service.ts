import { Injectable } from '@nestjs/common';
import { CreateInternationalInfoDto } from './dto/create-international-info.dto';
import { UpdateInternationalInfoDto } from './dto/update-international-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InternationalInfos } from './entities/international-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InternationalInfoService {
  constructor(
    @InjectRepository(InternationalInfos)
    private readonly internationalInfoRepository = Repository<InternationalInfos>,
  ) {}
  create(createInternationalInfoDto: CreateInternationalInfoDto) {
    return 'This action adds a new internationalInfo';
  }

  findAll() {
    return `This action returns all internationalInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} internationalInfo`;
  }

  update(id: number, updateInternationalInfoDto: UpdateInternationalInfoDto) {
    return `This action updates a #${id} internationalInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} internationalInfo`;
  }
}

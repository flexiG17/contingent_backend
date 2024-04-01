import { Injectable, Query, Req } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from './entities/student.entity';
import { Repository } from 'typeorm';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';

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

  async findAll(
    @Req() res: IRequestWithUser,
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Students>> {
    const queryBuilder = this.studentRepository.createQueryBuilder('students');
    queryBuilder
      .leftJoinAndSelect('students.contact', 'contact')
      .leftJoinAndSelect('students.agent', 'agent')
      .leftJoinAndSelect('students.representative', 'representative')
      .leftJoinAndSelect('students.current_education', 'current_education')
      .leftJoinAndSelect(
        'current_education.educational_programs',
        'educational_programs',
      )
      .leftJoinAndSelect('students.international_info', 'international_info')
      .leftJoinAndSelect('students.passport', 'passport')
      .leftJoinAndSelect('students.enrollment', 'enrollment')
      .leftJoinAndSelect('students.payment', 'payment')
      .leftJoinAndSelect('payment.student_payments', 'student_payments')
      .leftJoinAndSelect('students.old_education', 'old_education')
      .leftJoinAndSelect('students.metadata', 'metadata')
      .orderBy('metadata.created_at', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
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

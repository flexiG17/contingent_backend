import { Injectable, Query, Req } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from './entities/student.entity';
import {DataSource, Repository} from 'typeorm';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';
import * as XLSX from 'xlsx';
import * as process from 'process';
import {Users} from "../users/entities/user.entity";
import {Contacts} from "../contacts/entities/contact.entity";
import {Agents} from "../agents/entities/agent.entity";
import {Representatives} from "../representatives/entities/representative.entity";
import {CurrentEducations} from "../current-educations/entities/current-education.entity";
import {EducationalPrograms} from "../educational-programs/entities/educational-program.entity";
import {InternationalInfos} from "../international-infos/entities/international-info.entity";
import {Passports} from "../passports/entities/passport.entity";
import {Enrollments} from "../enrollments/entities/enrollments.entity";
import {Payments} from "../payments/entities/payment.entity";
import {StudentPayments} from "../student-payments/entities/student-payment.entity";
import {OldEducations} from "../old-educations/entities/old-education.entity";
import {Metadatas} from "../metadatas/entities/metadata.entity";
import {Tutors} from "../tutors/entities/tutor.entity";

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
      .leftJoin('students.agent', 'agent')
      .leftJoin('students.representative', 'representative')
      .addSelect([
        'agent.id',
        'agent.name',
        'representative.id',
        'representative.name',
      ])
      .leftJoinAndSelect('students.current_education', 'current_education')
      .leftJoinAndSelect(
        'current_education.educational_program',
        'educational_program',
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

  findOne(id: string) {
    return this.studentRepository.findOneBy({ id });
  }

  // работает несовмесм корректно
  update(id: string, updateStudentDto: UpdateStudentDto) {
    /*return this.studentRepository
      .createQueryBuilder('students')
      .update(Students)
      .set(updateStudentDto)
      .execute();*/
    return this.studentRepository.save({
      id,
      ...updateStudentDto,
    });
    /*return this.studentRepository.update(id, {
      id,
      ...updateStudentDto,
    });*/
  }

  // не работает каскадное удаление, зависимости остаются в базе
  remove(id: string) {
    return this.studentRepository.delete(id);
  }

  archive(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentRepository.save({
      id,
      metadata: {
        ...updateStudentDto.metadata,
        is_archived: true,
      },
    });
  }

  // заявка дублируется полностью на основе предыдущей без возможности внесения данных
  async duplicate(id: string, req: IRequestWithUser) {
    const res = await this.findOne(id);
    delete res?.id;
    delete res?.contact.id;
    delete res?.current_education.id;
    delete res?.current_education.educational_program;
    delete res?.international_info.id;
    delete res?.passport.id;
    delete res?.enrollment.id;
    delete res?.payment;
    delete res?.old_education.id;
    delete res?.metadata.id;
    return this.studentRepository.save({
      ...res,
      metadata: {
        created_by: req.user.id,
      },
    });
  }

  /*
    Вопрос в том, как получать значения таблиц. Если бы это было просто обращаясь к описанной сущности Students, то было бы просто, а так
    приходится создавать новое соединение и парсить все таблицы.

    Можно захардкодить структуру со столбцами, используя интерфейсы и енами
   */
  import(req: IRequestWithUser) {
    const workbook = XLSX.readFile(
      `C:\\Users\\flexiG\\WebstormProjects\\contingent_backend\\src\\upload\\file.xlsx`,
    );
    const sheetNames = workbook.SheetNames;
    const sheet = workbook.Sheets[sheetNames[0]];
    const dataSource = new DataSource({type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Users,
        Students,
        Contacts,
        Agents,
        Representatives,
        CurrentEducations,
        EducationalPrograms,
        InternationalInfos,
        Passports,
        Enrollments,
        Payments,
        StudentPayments,
        OldEducations,
        Metadatas,
        Tutors,
      ],
      synchronize: true,
    });
    dataSource.initialize()
        .then(() => {
          console.log(dataSource.getRepository(Students).metadata.columns[7]);
        })
    /*let columns = await StudentService.columns()
    columns = columns.filter(column => column.ru !== "")
    columns = columns.map(column => [column.ru.trim(), column.name.trim()])
    columns = new Map(columns)

    const range = XLSX.utils.decode_range(sheet["!ref"])

    for (let col = range.s.c; col <= range.e.c; col++) {
      const cell_ref = XLSX.utils.encode_cell({r: 0, c: col})
      let cell = sheet[cell_ref].v
      sheet[cell_ref].v = columns.get(cell)
      sheet[cell_ref].w = columns.get(cell)
      sheet[cell_ref].h = columns.get(cell)
    }

    let data = XLSX.utils.sheet_to_json(sheet, {raw: false})*/

    return 'Haha';
  }
}

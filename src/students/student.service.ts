import { Injectable, Req } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';
import * as XLSX from 'xlsx';
import { PrismaService } from '../prisma.service';
import { ParseStudentDatesUtil } from '../utils/parse-student-dates.util';
import { file_section, Prisma } from '@prisma/client';
import { GetStudentColumnsUtil } from '../utils/get-student-columns.util';
import { FileService } from '../file/file.service';
import { UploadFilesType } from '../file/types/upload-files.type';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FileInterface } from '../file/interfaces/file.interface';
import { Response } from 'express';

@Injectable()
export class StudentService {
  constructor(
    private prisma: PrismaService,
    private fileService: FileService,
  ) {}

  create(
    createStudentDto: CreateStudentDto,
    req: IRequestWithUser,
    files: UploadFilesType,
    res: Response,
  ) {
    const student_id = '28b12371-f075-4e5d-83a3-a19996689803';
    const student_name = 'Name of student';
    /*    const inputStudent = ParseStudentDatesUtil(createStudentDto);
        const { latin_name, russian_name, agent_id, representative_id, tutor_id } =
          inputStudent;
        const student = this.prisma.student.create({
          data: {
            latin_name,
            russian_name,
            agent_id,
            representative_id,
            tutor_id,
            contact: { create: inputStudent.contact },
            current_education: {
              create: inputStudent.current_education,
            },
            international_info: { create: inputStudent.international_info },
            enrollment: { create: inputStudent.enrollment },
            metadata: {
              create: {
                ...inputStudent.metadata,
                created_by_id: req.user.id,
              },
            },
            old_education: { create: inputStudent.old_education },
            passport: { create: inputStudent.passport },
            payment: {
              create: {
                ...inputStudent.payment,
                student_payment: {
                  create: inputStudent.payment?.student_payments,
                },
              },
            },
          },
        });*/

    this.fileService.createStudentStruct(student_id);
    const pathArray: Prisma.fileCreateManyInput[] = this.fileService.upload(
      student_id,
      student_name,
      files,
      req.user.id,
    );
    return this.fileService.savePath(pathArray).then(() => {
      return res.status(200).json('студент создан');
    });
  }

  async findAll(@Req() res: IRequestWithUser, pageOptionsDto: PageOptionsDto) {
    const columnsCount = await this.prisma.student.count();

    const students = await this.prisma.student.findMany({
      include: {
        contact: true,
        current_education: {
          include: {
            educational_programs: true,
          },
        },
        international_info: true,
        enrollment: true,
        metadata: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
                created_at: true,
                updated_at: true,
              },
            },
          },
        },
        old_education: true,
        passport: true,
        payment: {
          include: {
            student_payment: true,
          },
        },
      },
      skip: pageOptionsDto.skip,
      take: pageOptionsDto.take,
      orderBy: {
        metadata: {
          created_at: pageOptionsDto.order,
        },
      },
    });

    const itemCount = columnsCount;
    const entities = students;

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  findOne(id: string) {
    return this.prisma.student.findUnique({
      where: { id },
      include: {
        contact: true,
        file: true,
        current_education: {
          include: {
            educational_programs: true,
          },
        },
        international_info: true,
        enrollment: true,
        metadata: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
                created_at: true,
                updated_at: true,
              },
            },
          },
        },
        old_education: true,
        passport: true,
        payment: {
          include: {
            student_payment: true,
          },
        },
      },
    });
  }

  // отдельно прописать запрос для изменения оплаты
  async update(id: string, createStudentDto: CreateStudentDto) {
    const { latin_name, russian_name, agent_id, representative_id, tutor_id } =
      createStudentDto;

    const inputStudent = ParseStudentDatesUtil(createStudentDto);
    return this.prisma.student.update({
      where: { id },
      data: {
        latin_name,
        russian_name,
        agent_id,
        representative_id,
        tutor_id,
        contact: {
          update: {
            data: inputStudent.contact,
          },
        },
        current_education: {
          update: {
            data: inputStudent.current_education,
          },
        },
        international_info: {
          update: {
            data: inputStudent.international_info,
          },
        },
        enrollment: {
          update: {
            data: inputStudent.enrollment,
          },
        },
        metadata: {
          update: {
            data: {
              comments: inputStudent.metadata.comments,
              is_archived: inputStudent.metadata.is_archived,
            },
          },
        },
        old_education: {
          update: {
            data: inputStudent.old_education,
          },
        },
        passport: {
          update: {
            data: inputStudent.passport,
          },
        },
        payment: {
          update: {
            data: {
              payment_status: inputStudent.payment?.payment_status,
              contract_amount: inputStudent.payment?.contract_amount,
            },
          },
        },
      },
    });
  }

  async remove(id: string) {
    return this.prisma.student.delete({
      where: { id },
    });
  }

  archive(params: { is_archived: string; id: string }) {
    const { id, is_archived } = params;
    return this.prisma.student.update({
      where: { id },
      data: {
        metadata: {
          update: {
            data: {
              is_archived: Boolean(is_archived),
            },
          },
        },
      },
      include: {
        metadata: true,
      },
    });
  }

  async duplicate(id: string, req: IRequestWithUser) {
    /*return this.findOne(id).then((res) => {
      return this.create(DropStudentIdsUtil(res), req);
    });*/
  }

  import(req: IRequestWithUser) {
    /*const workbook = XLSX.readFile(
      `C:\\Users\\flexiG\\WebstormProjects\\contingent_backend\\src\\upload\\file.xlsx`,
    );*/
    return GetStudentColumnsUtil();

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
  }

  async findArchived(
    @Req() res: IRequestWithUser,
    pageOptionsDto: PageOptionsDto,
  ) {
    const columnsCount = await this.prisma.student.count({
      where: {
        metadata: {
          is_archived: true,
        },
      },
    });

    const students = await this.prisma.student.findMany({
      where: {
        metadata: {
          is_archived: true,
        },
      },
      include: {
        contact: true,
        current_education: {
          include: {
            educational_programs: true,
          },
        },
        international_info: true,
        enrollment: true,
        metadata: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                role: true,
                created_at: true,
                updated_at: true,
              },
            },
          },
        },
        old_education: true,
        passport: true,
        payment: {
          include: {
            student_payment: true,
          },
        },
      },
      skip: pageOptionsDto.skip,
      take: pageOptionsDto.take,
      orderBy: {
        metadata: {
          created_at: pageOptionsDto.order,
        },
      },
    });

    const itemCount = columnsCount;
    const entities = students;

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
    return pageOptionsDto;
  }
}

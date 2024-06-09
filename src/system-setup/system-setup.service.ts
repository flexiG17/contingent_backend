import { Injectable, Req } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { current_education_type, Prisma } from '@prisma/client';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMessageDto } from './dto/create-message.dto';
import { StudentService } from '../students/student.service';
import { GetStudentColumnsUtil } from '../utils/get-student-columns.util';
import * as Excel from 'exceljs';
import { Response } from 'express';
import { StudentInterface } from '../students/interfaces/student.interface';

@Injectable()
export class SystemSetupService {
  constructor(
    private prisma: PrismaService,
    private readonly mailService: MailerService,
  ) {}

  // указать типы поподробнее
  findColumns(res: { table: Prisma.ModelName; column: string }) {
    const query = this.prisma[res.table] as any;
    return query
      .findMany({
        distinct: [res.column],
      })
      .then((response: any) => {
        return response.map((field: any) => {
          return field[res.column];
        });
      });
  }

  downloadXlsx = async (studentIds: Record<number, string>, res: Response) => {
    const students = this.prisma.student.findMany({
      where: {
        id: {
          in: Object.values(studentIds),
        },
      },
      include: {
        agent: {
          select: {
            name: true,
            first_email: true,
          },
        },
        representative: {
          select: {
            name: true,
            first_email: true,
          },
        },
        tutor: {
          select: {
            name: true,
          },
        },
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
                name: true,
                email: true,
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
    const columns = GetStudentColumnsUtil();

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet(
      `Export by ${new Date().toLocaleDateString()}`,
    );
    worksheet.columns = columns;

    const dataToTable: Record<string, string | Date>[] = [];
    students
      // @ts-ignore
      .then(async (data: StudentInterface[]) => {
        data.map((student) => {
          const singleRow: Record<string, string | Date> = {};
          Object.entries(student).map((section) => {
            if (typeof section[1] === 'string') {
              singleRow[section[0]] = section[1];
            }

            if (typeof section[1] === 'object' && section[1]) {
              Object.entries(section[1]).map((field) => {
                if (field[0] === 'id') return '';
                if (field[1] === null) return '';
                if (
                  typeof field[1] === 'object' &&
                  Object.entries(field[1]).length > 1
                )
                  singleRow[field[0]] = 'Тестовые данные вложенности';
                else singleRow[field[0]] = field[1] as string | Date;
              });
            }
          });
          dataToTable.push(singleRow);
        });

        dataToTable.forEach((val, i, _) => {
          worksheet.addRow(val);
        });
        const filePath = `./upload/1A_exports/Export by ${new Date().toLocaleDateString()}.xlsx`;
        await workbook.xlsx.writeFile(filePath);

        return res.download(filePath);
      });
  };

  sendMessage(createMessageDto: CreateMessageDto, req: IRequestWithUser) {
    return this.mailService.sendMail({
      from: createMessageDto.from,
      to: createMessageDto.to,
      subject: createMessageDto.subject,
      text: createMessageDto.text,
      /*attachments: createMessageDto.files.map(({ name, arrayBuffer }) => ({
        filename: name,
        // contents: Buffer.from(arrayBuffer).toString('base64'),
        contentTransferEncoding: 'base64',
        // contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })),*/
    });
  }

  getFilterStruct() {
    return [
      {
        section: 'metadata',
        name: 'created_at',
        type: 'date',
        ru: 'Дата создания',
      },
      {
        section: 'passport',
        name: 'country',
        type: 'text',
        ru: 'Страна',
      },
      {
        section: 'passport',
        name: 'gender',
        type: 'text',
        ru: 'Пол',
      },
      {
        section: 'passport',
        name: 'birth_date',
        type: 'date',
        ru: 'Дата рождения',
      },
      {
        section: 'current_education',
        name: 'type',
        type: 'text',
        ru: 'Тип обучения',
      },
      {
        section: 'international_info',
        name: 'RF_location',
        type: 'text',
        ru: 'Нахождение в РФ',
      },
      {
        section: 'enrollment',
        name: 'status',
        type: 'text',
        ru: 'Статус зачисления',
      },
      {
        section: 'payment',
        name: 'payment_status',
        type: 'text',
        ru: 'Статус оплаты',
      },
    ];
  }
}

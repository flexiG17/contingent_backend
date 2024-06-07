import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
// import nodemailer from "nodemailer";
// import { MessageInterface } from "./interfaces/message.interface";

class MailService {
  /*#transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });*/
  /*async sendEmail(message: MessageInterface) {
    const mail = {
      from: `"${message.from}" <${process.env.EMAIL}>`,
      to: message.to,
      bcc: process.env.EMAIL,
      subject: message.subject,
      text: message.text,
      html: message.html,
      attachments: message.files.map((file: any) => new Object({
        filename: file.originalname,
        path: file.path
      }))
    };

    await this.#transport.sendMail(mail);
  }*/
}

@Injectable()
export class SystemSetupService {
  constructor(private prisma: PrismaService) {}

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

  sendMessage(res: Response) {}

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
    ]
  }
}

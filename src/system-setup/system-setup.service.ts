import { Injectable, Query } from "@nestjs/common";
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { SendMailDto } from "./dto/send-mail.dto";
import nodemailer from "nodemailer"
import { MessageInterface } from "./interfaces/message.interface";
import { ExceptionHandler } from "@nestjs/core/errors/exception-handler";
class MailService {

  #transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  async sendEmail(message: MessageInterface) {
    const mail = {
      from: `"${message.from}" <${process.env.EMAIL}>`,
      to: message.to,
      bcc: process.env.EMAIL,
      subject: message.subject,
      text: message.text,
      html: message.html,
      attachments: message.files.map(file => new Object({
        filename: file.originalname,
        path: file.path
      }))
    }

    await this.#transport.sendMail(mail)
  }
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

  sendMessage(sendMailDto: SendMailDto, res: Response) {
    MailService.sendEmail(sendMailDto)
      .then((data) => {
        res.status(data.status).json({message: "Письмо отправлено"})
      })
      .catch((e) => {
        throw new ExceptionHandler(e);
      });
  }
}

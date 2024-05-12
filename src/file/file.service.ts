import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';
import { file_section, Prisma } from '@prisma/client';
import { UploadFilesType } from './types/upload-files.type';
import { PrismaService } from '../prisma.service';
import { Response } from 'express';

@Injectable()
export class FileService {
  private readonly filesPath?: string = '';

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    this.filesPath = configService.get<string>('UPLOAD_PATH');
  }

  private GetRootStudentPath = (id: string) => {
    return `${this.filesPath}/${id}`;
  };

  createStudentStruct(student_id: string) {
    const rootStudentPath = this.GetRootStudentPath(student_id);
    if (!fs.existsSync(rootStudentPath)) fs.mkdirSync(rootStudentPath);

    const struct = Object.keys(file_section);
    struct.map((section) => {
      fs.mkdirSync(`${rootStudentPath}/${section}`);
    });
    return 'This action adds a student struct';
  }

  upload(
    student_id: string,
    student_name: string,
    files: UploadFilesType,
    user_id: string,
  ): Prisma.fileCreateManyInput[] {
    const rootStudentPath = this.GetRootStudentPath(student_id);
    const result: Prisma.fileCreateManyInput[] = [];

    Object.keys(file_section).map((section: file_section) => {
      let iterableCount = 1;
      files[section]?.map((file) => {
        const splittedByDot = file.originalname.split('.');
        const fileExtension = splittedByDot[splittedByDot.length - 1];
        file.filename = `${section} ${student_name} (${iterableCount}).${fileExtension}`;
        const newFilePath = `${rootStudentPath}/${section}/${file.filename}`;
        fs.rename(file.path, newFilePath, function (err) {
          if (err) throw err;
        });
        result.push({
          name: file.filename,
          size: file.size,
          section: section,
          path: newFilePath,
          created_by_id: user_id,
          student_id: student_id,
        });
        iterableCount++;
      });
      iterableCount = 0;
    });

    return result;
  }

  savePath(filesArray: Prisma.fileCreateManyInput[]) {
    return this.prisma.file.createMany({
      data: filesArray,
    });
  }

  async download(id: string, res: Response) {
    const inputFile = await this.prisma.file.findFirst({
      where: { id },
    });
    /*const file = createReadStream(join(process.cwd(), inputFile!.path));
    file.pipe(res);
    return res.status(200);*/
    res.download(inputFile!.path);
  }

  uploadOne() {}
}

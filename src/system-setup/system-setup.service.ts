import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

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
}

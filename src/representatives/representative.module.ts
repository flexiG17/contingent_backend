import { Module } from '@nestjs/common';
import { RepresentativeService } from './representative.service';
import { RepresentativeController } from './representative.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [RepresentativeController],
  providers: [RepresentativeService, PrismaService],
})
export class RepresentativeModule {}

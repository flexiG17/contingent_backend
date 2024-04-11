import { Module } from '@nestjs/common';
import { RepresentativeService } from './representative.service';
import { RepresentativeController } from './representative.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [RepresentativeController],
  providers: [RepresentativeService],
})
export class RepresentativeModule {}

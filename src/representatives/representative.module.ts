import { Module } from '@nestjs/common';
import { RepresentativeService } from './representative.service';
import { RepresentativeController } from './representative.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Representatives } from './entities/representative.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Representatives])],
  controllers: [RepresentativeController],
  providers: [RepresentativeService],
})
export class RepresentativeModule {}

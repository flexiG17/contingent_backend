import { Module } from '@nestjs/common';
import { CurrentEducationService } from './current-education.service';
import { CurrentEducationController } from './current-education.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentEducations } from './entities/current-education.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CurrentEducations])],
  controllers: [CurrentEducationController],
  providers: [CurrentEducationService],
})
export class CurrentEducationModule {}

import { Module } from '@nestjs/common';
import { EducationalProgramService } from './educational-program.service';
import { EducationalProgramController } from './educational-program.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [EducationalProgramController],
  providers: [EducationalProgramService],
})
export class EducationalProgramModule {}

import { Module } from '@nestjs/common';
import { EducationalProgramService } from './educational-program.service';
import { EducationalProgramController } from './educational-program.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationalPrograms } from './entities/educational-program.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EducationalPrograms])],
  controllers: [EducationalProgramController],
  providers: [EducationalProgramService],
})
export class EducationalProgramModule {}

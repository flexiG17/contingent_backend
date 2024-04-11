import { Module } from '@nestjs/common';
import { CurrentEducationService } from './current-education.service';
import { CurrentEducationController } from './current-education.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [],
  controllers: [CurrentEducationController],
  providers: [CurrentEducationService],
})
export class CurrentEducationModule {}

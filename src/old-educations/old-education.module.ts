import { Module } from '@nestjs/common';
import { OldEducationService } from './old-education.service';
import { OldEducationController } from './old-education.controller';

@Module({
  controllers: [OldEducationController],
  providers: [OldEducationService],
})
export class OldEducationModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemSetupController } from './system-setup.controller';
import { SystemSetupService } from './system-setup.service';
import { Students } from '../students/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Students])],
  controllers: [SystemSetupController],
  providers: [SystemSetupService],
})
export class SystemSetupModule {}

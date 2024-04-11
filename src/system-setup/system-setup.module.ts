import { Module } from '@nestjs/common';
import { SystemSetupController } from './system-setup.controller';
import { SystemSetupService } from './system-setup.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [SystemSetupController],
  providers: [SystemSetupService, PrismaService],
})
export class SystemSetupModule {}

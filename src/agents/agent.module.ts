import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [AgentController],
  providers: [AgentService, PrismaService],
})
export class AgentModule {}

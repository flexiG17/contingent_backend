import { Module } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentController } from './agent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agents } from './entities/agent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agents])],
  controllers: [AgentController],
  providers: [AgentService],
})
export class AgentModule {}

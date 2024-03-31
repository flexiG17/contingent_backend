import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agents } from './entities/agent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agents)
    private readonly agentRepository: Repository<Agents>,
  ) {}
  create(createAgentDto: CreateAgentDto) {
    return 'This action adds a new agents';
  }

  findAll() {
    return `This action returns all agent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  update(id: number, updateAgentDto: UpdateAgentDto) {
    return `This action updates a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}

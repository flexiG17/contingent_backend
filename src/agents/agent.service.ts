import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { PrismaService } from '../prisma.service';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';

@Injectable()
export class AgentService {
  constructor(private prisma: PrismaService) {}
  create(createAgentDto: CreateAgentDto) {
    return this.prisma.agent.create({
      data: createAgentDto,
    });
  }

  async findAll(pageOptionsDto: PageOptionsDto) {
    const columnsCount = await this.prisma.agent.count();
    const agents = await this.prisma.agent.findMany({
      skip: pageOptionsDto.skip,
      take: pageOptionsDto.take,
      orderBy: {
        created_at: pageOptionsDto.order,
      },
    });
    const itemCount = columnsCount;
    const entities = agents;

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(entities, pageMetaDto);
  }

  findOne(id: string) {
    return this.prisma.agent.findFirst({
      where: { id },
    });
  }

  update(id: string, updateAgentDto: UpdateAgentDto) {
    return this.prisma.agent.update({
      where: { id },
      data: updateAgentDto,
    });
  }

  remove(id: string) {
    return this.prisma.agent.delete({
      where: { id },
    });
  }
}

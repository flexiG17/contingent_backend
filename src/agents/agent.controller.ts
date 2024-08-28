import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, Query,
  UseGuards,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../enums/role.enum';
import { ApiTags } from '@nestjs/swagger';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('agent')
@ApiTags('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Post()
  @Roles(UserRole.Editor)
  create(@Body() createAgentDto: CreateAgentDto) {
    return this.agentService.create(createAgentDto);
  }

  @Get()
  @Roles(UserRole.Viewer)
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.agentService.findAll(pageOptionsDto);
  }

  @Get(':id')
  @Roles(UserRole.Viewer)
  findOne(@Param('id') id: string) {
    return this.agentService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.Editor)
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) {
    return this.agentService.update(id, updateAgentDto);
  }

  @Delete(':id')
  @Roles(UserRole.Editor)
  remove(@Param('id') id: string) {
    return this.agentService.remove(id);
  }
}

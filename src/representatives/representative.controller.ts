import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RepresentativeService } from './representative.service';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../enums/role.enum';
import { ApiTags } from '@nestjs/swagger';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('representative')
@ApiTags('representative')
export class RepresentativeController {
  constructor(private readonly representativeService: RepresentativeService) {}

  @Post()
  @Roles(UserRole.Editor)
  create(@Body() createRepresentativeDto: CreateRepresentativeDto) {
    return this.representativeService.create(createRepresentativeDto);
  }

  @Get()
  @Roles(UserRole.Viewer)
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.representativeService.findAll(pageOptionsDto);
  }

  @Get(':id')
  @Roles(UserRole.Viewer)
  findOne(@Param('id') id: string) {
    return this.representativeService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.Editor)
  update(
    @Param('id') id: string,
    @Body() updateRepresentativeDto: UpdateRepresentativeDto,
  ) {
    return this.representativeService.update(id, updateRepresentativeDto);
  }

  @Delete(':id')
  @Roles(UserRole.Editor)
  remove(@Param('id') id: string) {
    return this.representativeService.remove(id);
  }
}

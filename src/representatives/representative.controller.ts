import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RepresentativeService } from './representative.service';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('representative')
export class RepresentativeController {
  constructor(private readonly representativeService: RepresentativeService) {}

  @Post()
  create(@Body() createRepresentativeDto: CreateRepresentativeDto) {
    return this.representativeService.create(createRepresentativeDto);
  }

  @Get()
  findAll() {
    return this.representativeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.representativeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRepresentativeDto: UpdateRepresentativeDto,
  ) {
    return this.representativeService.update(+id, updateRepresentativeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.representativeService.remove(+id);
  }
}

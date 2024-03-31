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
import { CurrentEducationService } from './current-education.service';
import { CreateCurrentEducationDto } from './dto/create-current-education.dto';
import { UpdateCurrentEducationDto } from './dto/update-current-education.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('current-educations')
export class CurrentEducationController {
  constructor(
    private readonly currentEducationService: CurrentEducationService,
  ) {}

  @Post()
  create(@Body() createCurrentEducationDto: CreateCurrentEducationDto) {
    return this.currentEducationService.create(createCurrentEducationDto);
  }

  @Get()
  findAll() {
    return this.currentEducationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currentEducationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCurrentEducationDto: UpdateCurrentEducationDto,
  ) {
    return this.currentEducationService.update(+id, updateCurrentEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currentEducationService.remove(+id);
  }
}

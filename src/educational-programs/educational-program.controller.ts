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
import { EducationalProgramService } from './educational-program.service';
import { CreateEducationalProgramDto } from './dto/create-educational-program.dto';
import { UpdateEducationalProgramDto } from './dto/update-educational-program.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('educational-programs')
export class EducationalProgramController {
  constructor(
    private readonly educationalProgramsService: EducationalProgramService,
  ) {}

  @Post()
  create(@Body() createEducationalProgramDto: CreateEducationalProgramDto) {
    return this.educationalProgramsService.create(createEducationalProgramDto);
  }

  @Get()
  findAll() {
    return this.educationalProgramsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educationalProgramsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEducationalProgramDto: UpdateEducationalProgramDto,
  ) {
    return this.educationalProgramsService.update(
      +id,
      updateEducationalProgramDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationalProgramsService.remove(+id);
  }
}

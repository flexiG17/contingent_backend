import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OldEducationService } from './old-education.service';
import { CreateOldEducationDto } from './dto/create-old-education.dto';
import { UpdateOldEducationDto } from './dto/update-old-education.dto';

@Controller('old-educations')
export class OldEducationController {
  constructor(private readonly oldEducationService: OldEducationService) {}

  /* @Post()
  create(@Body() createOldEducationDto: CreateOldEducationDto) {
    return this.oldEducationService.create(createOldEducationDto);
  }

  @Get()
  findAll() {
    return this.oldEducationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oldEducationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOldEducationDto: UpdateOldEducationDto,
  ) {
    return this.oldEducationService.update(+id, updateOldEducationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oldEducationService.remove(+id);
  }*/
}

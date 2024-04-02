import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InternationalInfoService } from './international-info.service';
import { CreateInternationalInfoDto } from './dto/create-international-info.dto';
import { UpdateInternationalInfoDto } from './dto/update-international-info.dto';

@Controller('international-infos')
export class InternationalInfoController {
  constructor(
    private readonly internationalInfoService: InternationalInfoService,
  ) {}

  /*@Post()
  create(@Body() createInternationalInfoDto: CreateInternationalInfoDto) {
    return this.internationalInfoService.create(createInternationalInfoDto);
  }

  @Get()
  findAll() {
    return this.internationalInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internationalInfoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInternationalInfoDto: UpdateInternationalInfoDto,
  ) {
    return this.internationalInfoService.update(
      +id,
      updateInternationalInfoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internationalInfoService.remove(+id);
  }*/
}

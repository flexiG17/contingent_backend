import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FileService } from './file.service';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('file')
@ApiTags('file')
//@UseGuards(JwtAuthGuard)
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.fileService.download(id, res);
  }

  @Post('id')
  upload(@Param('id') id: string) {
    return this.fileService.uploadOne();
  }
}

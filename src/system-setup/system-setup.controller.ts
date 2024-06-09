import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { UserRole } from '../enums/role.enum';
import { SystemSetupService } from './system-setup.service';
import { Roles } from '../decorators/roles.decorator';
import { StudentInterface } from '../interfaces/AllStudentsFields.interface';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from '../utils/page/dtos';
import { CreateStudentDto } from '../students/dto/create-student.dto';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { CreateFileDto } from '../file/dto/create-file.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { Response } from 'express';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('system')
@ApiTags('system')
export class SystemSetupController {
  constructor(private readonly systemSetupService: SystemSetupService) {}
  @Roles(UserRole.Editor)
  @Get('/:column_name')
  findAll(@Query() res: { table: Prisma.ModelName; column: string }) {
    return this.systemSetupService.findColumns(res);
  }

  @Post('/sendStudent')
  sendMessage(
    @Body() createMessageDto: CreateMessageDto,
    @Req() req: IRequestWithUser,
  ) {
    return this.systemSetupService.sendMessage(createMessageDto, req);
  }

  @Get('/filter/struct')
  getFilterStruct() {
    return this.systemSetupService.getFilterStruct();
  }

  @Get('/export/xlsx')
  downloadXlsx(
    @Query() studentIds: Record<number, string>,
    @Res() res: Response,
  ) {
    return this.systemSetupService.downloadXlsx(studentIds, res);
  }
}

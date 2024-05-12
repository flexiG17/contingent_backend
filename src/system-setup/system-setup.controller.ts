import { Body, Controller, Get, Post, Query, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { UserRole } from '../enums/role.enum';
import { SystemSetupService } from './system-setup.service';
import { Roles } from '../decorators/roles.decorator';
import { StudentInterface } from '../interfaces/AllStudentsFields.interface';
import { response } from 'express';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { PageOptionsDto } from "../utils/page/dtos";
import { CreateStudentDto } from "../students/dto/create-student.dto";
import { SendMailDto } from "./dto/send-mail.dto";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('system')
@ApiTags('system')
export class SystemSetupController {
  constructor(private readonly systemSetupService: SystemSetupService) {}
  @Roles(UserRole.EDITOR)
  @Get('/:column_name')
  findAll(@Query() res: { table: Prisma.ModelName; column: string }) {
    return this.systemSetupService.findColumns(res);
  }

  @Post('/sendStudent')
  sendMessage(@Body() sendMailDto: SendMailDto, @Query() res: Response) {
    return this.systemSetupService.sendMessage(sendMailDto, res);
  }
}

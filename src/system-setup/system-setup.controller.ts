import { Body, Controller, Get, Query, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { UserRole } from '../enums/role.enum';
import { SystemSetupService } from './system-setup.service';
import { Roles } from '../decorators/roles.decorator';
import { StudentInterface } from '../interfaces/AllStudentsFields.interface';
import { response } from 'express';
import { Prisma } from '@prisma/client';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('system')
export class SystemSetupController {
  constructor(private readonly systemSetupService: SystemSetupService) {}

  @Roles(UserRole.EDITOR)
  @Get('/:column_name')
  findAll(@Query() res: { table: Prisma.ModelName; column: string }) {
    return this.systemSetupService.findColumns(res);
  }
}

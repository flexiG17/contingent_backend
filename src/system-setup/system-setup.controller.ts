import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { UserRole } from '../enums/role.enum';
import { SystemSetupService } from './system-setup.service';
import { Roles } from '../decorators/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('system')
export class SystemSetupController {
  constructor(private readonly systemSetupService: SystemSetupService) {}

  @Roles(UserRole.EDITOR)
  @Get('column')
  findAll() {
    return this.systemSetupService.findColumns();
  }
}

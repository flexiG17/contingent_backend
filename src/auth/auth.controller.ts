import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: IRequestWithUser) {
    return this.authService.login(req.user);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../enums/role.enum';
import { RolesGuard } from '../guard/roles.guard';
import { ChangeUserPasswordDto } from './dto/change-password-self-user.dto';
import { Response } from 'express';
import { PageOptionsDto } from '../utils/page/dtos';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  @Roles(UserRole.ADMIN)
  create(@Body() createUserDto: CreateUserDto, @Req() req: IRequestWithUser) {
    return this.userService.create(createUserDto, req);
  }

  @Get('')
  @Roles(UserRole.ADMIN)
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.userService.findAll(pageOptionsDto);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Patch()
  updateSelf(
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: IRequestWithUser,
  ) {
    return this.userService.updateSelf(updateUserDto, req);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Patch('password/:id')
  @Roles(UserRole.ADMIN)
  changeUserPassword(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.changeUserPassword(id, updateUserDto);
  }

  // этот контроллер бесконечно крутит загрузку, хотя все выполняется (он ничего не прекращает работу запроса)
  @Patch('change/password')
  changeSelfPassword(
    @Req() req: IRequestWithUser,
    @Res() res: Response,
    @Body() changeUserPasswordDto: ChangeUserPasswordDto,
  ) {
    return this.userService.changeSelfPassword(changeUserPasswordDto, req, res);
  }
}

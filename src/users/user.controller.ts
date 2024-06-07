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
  HttpStatus,
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
import { PageDto, PageOptionsDto } from '../utils/page/dtos';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UserInterface } from './interfaces/user.interface';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('JWT-auth')
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  @Roles(UserRole.Admin)
  @ApiOperation({ summary: 'create new user (only for Admin)' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  create(@Body() createUserDto: CreateUserDto, @Req() req: IRequestWithUser) {
    return this.userService.create(createUserDto, req);
  }

  @Get('')
  @Roles(UserRole.Admin)
  @ApiOperation({ summary: 'find all users with pagination' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: PageDto<User>,
  })
  findAll(@Query() pageOptionsDto: PageOptionsDto) {
    return this.userService.findAll(pageOptionsDto);
  }

  @Get(':id')
  @Roles(UserRole.Admin)
  @ApiOperation({ summary: 'get single user' })
  @ApiParam({ name: 'id', required: true, description: 'user identifier' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.Admin)
  @ApiOperation({ summary: 'update user by id' })
  @ApiParam({ name: 'id', required: true, description: 'user identifier' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Patch()
  @ApiOperation({ summary: 'update self user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success', type: User })
  updateSelf(
    @Body() updateUserDto: UpdateUserDto,
    @Req() req: IRequestWithUser,
  ) {
    return this.userService.updateSelf(updateUserDto, req);
  }

  @Delete(':id')
  @Roles(UserRole.Admin)
  @ApiOperation({ summary: 'remove user by id' })
  @ApiParam({ name: 'id', required: true, description: 'user identifier' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Patch('password/:id')
  @Roles(UserRole.Admin)
  @ApiOperation({ summary: 'change user password (only for admin)' })
  @ApiParam({ name: 'id', required: true, description: 'user identifier' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  changeUserPassword(
    @Param('id') id: string,
    @Body() changeUserPasswordDto: ChangeUserPasswordDto,
  ) {
    return this.userService.changeUserPassword(id, changeUserPasswordDto);
  }

  // этот контроллер бесконечно крутит загрузку, хотя все выполняется (он ничего не прекращает работу запроса)
  @Patch('change/password')
  @ApiOperation({ summary: 'change self user password' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Success' })
  changeSelfPassword(
    @Req() req: IRequestWithUser,
    @Res() res: Response,
    @Body() changeUserPasswordDto: ChangeUserPasswordDto,
  ) {
    return this.userService.changeSelfPassword(changeUserPasswordDto, req, res);
  }
}

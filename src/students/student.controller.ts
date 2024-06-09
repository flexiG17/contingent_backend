import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { UserRole } from '../enums/role.enum';
import { Roles } from '../decorators/roles.decorator';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { UploadFilesType } from '../file/types/upload-files.type';
import { UploadFilesConst } from '../file/consts/upload-files.const';
import { Response } from 'express';
import { myStorage } from '../utils/multer-config.util';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiExtraModels,
  ApiTags,
} from '@nestjs/swagger';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller(['student'])
@ApiTags('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Roles(UserRole.Editor)
  @Post()
  create(
    @Body() createStudentDto: CreateStudentDto,
    @Req() req: IRequestWithUser,
    @Res() res: Response,
  ) {
    return this.studentService.create(createStudentDto, req, res);
  }

  @Get()
  findAll(
    @Query() filterParams: any,
    @Req() req: IRequestWithUser,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.studentService.findAll(filterParams, req, pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Roles(UserRole.Editor)
  @Patch(':id')
  update(@Param('id') id: string, @Body() createStudentDto: CreateStudentDto) {
    return this.studentService.update(id, createStudentDto);
  }

  @Roles(UserRole.Editor)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }

  @Roles(UserRole.Editor)
  @Patch('')
  archive(@Query() params: { is_archived: boolean; id: string }) {
    return this.studentService.archive(params);
  }

  @Roles(UserRole.Editor)
  @Post('/duplicate/:id')
  duplicate(@Param('id') id: string, @Req() req: IRequestWithUser) {
    return this.studentService.duplicate(id, req);
  }

  @Roles(UserRole.Editor)
  @Post('/import')
  import(@Req() req: IRequestWithUser) {
    return this.studentService.import(req);
  }

  @Roles(UserRole.Editor)
  @Get('/archived/get')
  findArchived(
    @Req() req: IRequestWithUser,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.studentService.findArchived(req, pageOptionsDto);
  }
}

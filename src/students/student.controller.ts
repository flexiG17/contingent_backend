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
  Query,
  Res,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { UserRole } from '../enums/role.enum';
import { Roles } from '../decorators/roles.decorator';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { PageOptionsDto } from '../utils/page/dtos';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Roles(UserRole.EDITOR)
  @Post()
  create(
    @Body() createStudentDto: CreateStudentDto,
    @Req() req: IRequestWithUser,
  ) {
    return this.studentService.create(createStudentDto, req);
  }

  @Get()
  findAll(
    @Req() res: IRequestWithUser,
    @Query() pageOptionsDto: PageOptionsDto,
  ) {
    return this.studentService.findAll(res, pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Roles(UserRole.EDITOR)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Roles(UserRole.EDITOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }

  @Roles(UserRole.EDITOR)
  @Patch('/archive/:id')
  archive(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.archive(id, updateStudentDto);
  }

  @Roles(UserRole.EDITOR)
  @Post('/duplicate/:id')
  duplicate(@Param('id') id: string, @Req() req: IRequestWithUser) {
    return this.studentService.duplicate(id, req);
  }
  @Roles(UserRole.EDITOR)
  @Post('/import')
  import(@Req() req: IRequestWithUser) {
    return this.studentService.import(req);
  }
}

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
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { UserRole } from '../enums/role.enum';
import { Roles } from '../decorators/roles.decorator';
import { IRequestWithUser } from '../interfaces/Request.interface';

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
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}

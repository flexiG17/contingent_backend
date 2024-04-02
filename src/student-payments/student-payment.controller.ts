import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentPaymentService } from './student-payment.service';
import { CreateStudentPaymentDto } from './dto/create-student-payment.dto';
import { UpdateStudentPaymentDto } from './dto/update-student-payment.dto';

@Controller('students-payments')
export class StudentPaymentController {
  constructor(private readonly studentPaymentService: StudentPaymentService) {}

  /*@Post()
  create(@Body() createStudentPaymentDto: CreateStudentPaymentDto) {
    return this.studentPaymentService.create(createStudentPaymentDto);
  }

  @Get()
  findAll() {
    return this.studentPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentPaymentDto: UpdateStudentPaymentDto,
  ) {
    return this.studentPaymentService.update(+id, updateStudentPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentPaymentService.remove(+id);
  }*/
}

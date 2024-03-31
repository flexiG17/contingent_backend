import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrentEducationDto } from './create-current-education.dto';

export class UpdateCurrentEducationDto extends PartialType(
  CreateCurrentEducationDto,
) {}

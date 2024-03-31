import { PartialType } from '@nestjs/mapped-types';
import { CreateOldEducationDto } from './create-old-education.dto';

export class UpdateOldEducationDto extends PartialType(CreateOldEducationDto) {}

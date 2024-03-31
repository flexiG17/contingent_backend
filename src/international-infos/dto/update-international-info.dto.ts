import { PartialType } from '@nestjs/mapped-types';
import { CreateInternationalInfoDto } from './create-international-info.dto';

export class UpdateInternationalInfoDto extends PartialType(
  CreateInternationalInfoDto,
) {}

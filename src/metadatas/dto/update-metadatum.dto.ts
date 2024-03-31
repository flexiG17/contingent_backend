import { PartialType } from '@nestjs/mapped-types';
import { CreateMetadataDto } from './create-metadata.dto';

export class UpdateMetadatumDto extends PartialType(CreateMetadataDto) {}

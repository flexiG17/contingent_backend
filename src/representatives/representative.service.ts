import { Injectable } from '@nestjs/common';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';
import { PrismaService } from '../prisma.service';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';

@Injectable()
export class RepresentativeService {
  constructor(private prisma: PrismaService) {}
  create(createRepresentativeDto: CreateRepresentativeDto) {
    return this.prisma.representative.create({
      data: createRepresentativeDto,
    });
  }

  async findAll(pageOptionsDto: PageOptionsDto) {
    const columnsCount = await this.prisma.representative.count();
    const representatives = await this.prisma.representative.findMany({
      skip: pageOptionsDto.skip,
      take: pageOptionsDto.take,
      orderBy: {
        created_at: pageOptionsDto.order,
      },
    });
    const itemCount = columnsCount;
    const entities = representatives;

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(entities, pageMetaDto);
  }

  findOne(id: string) {
    return this.prisma.representative.findFirst({
      where: { id },
    });
  }

  update(id: string, updateRepresentativeDto: UpdateRepresentativeDto) {
    return this.prisma.representative.update({
      where: { id },
      data: updateRepresentativeDto,
    });
  }

  remove(id: string) {
    return this.prisma.representative.delete({
      where: { id },
    });
  }
}

import { Module } from '@nestjs/common';
import { InternationalInfoService } from './international-info.service';
import { InternationalInfoController } from './international-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternationalInfos } from './entities/international-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InternationalInfos])],
  controllers: [InternationalInfoController],
  providers: [InternationalInfoService],
})
export class InternationalInfoModule {}

import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { Response } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadFilesConst } from './consts/upload-files.const';
import { myStorage } from '../utils/multer-config.util';
import { UploadFilesType } from './types/upload-files.type';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../enums/role.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('JWT-auth')
@ApiTags('file')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  @Post('create/:id')
  @Roles(UserRole.Editor)
  @UseInterceptors(
    FileFieldsInterceptor(UploadFilesConst, {
      storage: myStorage,
    }),
  )
  @ApiConsumes('multipart/form-data')
  createStudentFiles(
    @Param('id') id: string,
    @Res() res: Response,
    @Req() req: IRequestWithUser,
    @UploadedFiles() files: UploadFilesType,
  ) {
    return this.fileService.createStudentFiles(id, res, req, files);
  }
  @Get('/single/:id')
  @Roles(UserRole.Editor)
  downloadOne(@Param('id') id: string, @Res() res: Response) {
    return this.fileService.download(id, res);
  }

  @Get('/student/:id')
  @Roles(UserRole.Editor)
  findAll(@Param('id') id: string) {
    return this.fileService.findAll(id);
  }

  /*@Post('id')
  upload(@Param('id') id: string) {
    return this.fileService.uploadOne();
  }*/
}

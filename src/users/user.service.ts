import { HttpStatus, Injectable, Req, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { ChangeUserPasswordDto } from './dto/change-password-self-user.dto';
import { Response } from 'express';
import { PrismaService } from '../prisma.service';
import { PageDto, PageMetaDto, PageOptionsDto } from '../utils/page/dtos';
import { user } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto, req: IRequestWithUser) {
    const inputData = { ...createUserDto };
    inputData.password = bcrypt.hashSync(createUserDto.password, 10);
    inputData.created_by_id = req.user.id;

    return this.prisma.user.create({
      data: inputData,
      include: {
        user: true,
      },
    });
  }

  async findAll(pageOptionsDto: PageOptionsDto) {
    const columnsCount = await this.prisma.user.count();

    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        created_at: true,
        updated_at: true,
        user: {
          include: {
            user: true,
          },
        },
      },
      skip: pageOptionsDto.skip,
      take: pageOptionsDto.take,
      orderBy: {
        created_at: pageOptionsDto.order,
      },
    });

    const itemCount = columnsCount;
    const entities = users;

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        created_at: true,
        updated_at: true,
        user: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        created_at: true,
        updated_at: true,
        user: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  updateSelf(updateUserDto: UpdateUserDto, @Req() req: IRequestWithUser) {
    return this.prisma.user.update({
      where: { id: req.user.id },
      data: updateUserDto,
    });
  }

  changeUserPassword(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        password: bcrypt.hashSync(updateUserDto.password!, 10),
      },
    });
  }

  changeSelfPassword(
    changeUserPasswordDto: ChangeUserPasswordDto,
    @Req() req: IRequestWithUser,
    @Res() res: Response,
  ) {
    this.prisma.user
      .findFirst({
        where: { id: req.user.id },
      })
      .then((user: user) => {
        if (
          !bcrypt.compareSync(changeUserPasswordDto.oldPassword, user!.password)
        ) {
          return res.status(HttpStatus.CONFLICT).json('Пароли не совпадают');
        }
      });
    return this.prisma.user
      .update({
        where: { id: req.user.id },
        data: {
          password: bcrypt.hashSync(changeUserPasswordDto.password!, 10),
        },
      })
      .then(() => {
        return res.status(HttpStatus.OK).json('Пароль успешно изменён');
      });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

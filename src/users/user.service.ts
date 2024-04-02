import {
  ConflictException,
  HttpStatus,
  Injectable,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { ChangeUserPasswordDto } from './dto/change-password-self-user.dto';
import { Response } from 'express';

@Injectable()
export class UserService {
  private readonly dataToDisplay = {
    id: true,
    name: true,
    email: true,
    role: true,
    created_at: true,
    updated_at: true,
    created_by: true,
  };
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto, req: IRequestWithUser) {
    const inputData = { ...createUserDto };
    inputData.password = bcrypt.hashSync(createUserDto.password, 10);
    inputData.created_by = req.user.id;
    return this.userRepository.save(inputData);
  }

  findAll() {
    return this.userRepository.find({
      relations: ['created_by'],
      select: this.dataToDisplay,
    });
  }
  findByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password: true,
      },
    });
  }

  findOne(id: string) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['created_by'],
      select: this.dataToDisplay,
    });
  }

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, {
      ...updateUserDto,
    });
  }

  updateSelf(updateUserDto: UpdateUserDto, @Req() req: IRequestWithUser) {
    return this.userRepository.update(req.user.id, updateUserDto);
  }

  changeUserPassword(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, {
      password: bcrypt.hashSync(updateUserDto.password!, 10),
    });
  }

  changeSelfPassword(
    changeUserPasswordDto: ChangeUserPasswordDto,
    @Req() req: IRequestWithUser,
    @Res() res: Response,
  ) {
    this.userRepository
      .findOne({
        where: { id: req.user.id },
      })
      .then(({ password }: Users) => {
        if (!bcrypt.compareSync(changeUserPasswordDto.oldPassword, password)) {
          return res.status(HttpStatus.CONFLICT).json('Пароли не совпадают');
        }
      });
    return this.userRepository.update(req.user.id, {
      password: bcrypt.hashSync(changeUserPasswordDto.password!, 10),
    });
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}

import { ConflictException, Injectable, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import process from 'process';
import { IRequestWithUser } from '../interfaces/Request.interface';
import { ChangeUserPasswordDto } from './dto/changePassword-user.dto';

@Injectable()
export class UserService {
  private readonly dataToDisplay = {
    id: true,
    name: true,
    email: true,
    role: true,
    date_creation: true,
    created_by: true,
  };
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto, req: IRequestWithUser) {
    const inputData = { ...createUserDto };
    inputData.date_creation = new Date();
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
    return this.userRepository.findOneBy({ email });
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
      password: bcrypt.hashSync(updateUserDto.password!, 10),
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
  ) {
    if (
      !bcrypt.compareSync(changeUserPasswordDto.oldPassword, req.user.password)
    )
      throw new ConflictException();
    return this.userRepository.update(req.user.id, {
      password: bcrypt.hashSync(changeUserPasswordDto.password!, 10),
    });
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}

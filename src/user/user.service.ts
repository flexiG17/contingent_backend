import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const inputData = { ...createUserDto };
    inputData.user_date_creation = new Date();
    inputData.user_password = bcrypt.hashSync(createUserDto.user_password, 10);
    inputData.whoCreated = 6;
    return this.userRepository.save(inputData);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(user_id: number) {
    return this.userRepository.findOneBy({ user_id });
  }

  update(user_id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(user_id, updateUserDto);
  }

  remove(user_id: number) {
    return this.userRepository.delete(user_id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const dataToSave = { ...createUserDto };
    dataToSave.user_date_creation = new Date();
    dataToSave.user_name = 'Имя из кода';
    return this.userRepository.save(dataToSave);
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

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
    inputData.date_creation = new Date();
    inputData.password = bcrypt.hashSync(createUserDto.password, 10);
    inputData.created_by = '20e0bea6-6c78-4ea8-b5c0-06233d83d455';
    return this.userRepository.save(inputData);
  }

  findAll() {
    return this.userRepository.find();
  }
  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  changePassword(id: string, updateUserDto: UpdateUserDto) {
    /*const userPassword = user.password;
    if (!bcrypt.compareSync(updateUserDto.password!, res?.password!))
      throw new ConflictException();*/
    const hashedPassword = {
      password: bcrypt.hashSync(updateUserDto.password!, 10),
    };
    return this.userRepository.update(id, hashedPassword);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}

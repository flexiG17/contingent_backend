import {ConflictException, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import process from 'process';
import { IRequestWithUser } from '../interfaces/Request.interface';

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

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  changePassword(
    id: string,
    updateUserDto: UpdateUserDto,
    req: IRequestWithUser,
  ) {
    /*if (!bcrypt.compareSync(updateUserDto.password!, req.user.password))
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

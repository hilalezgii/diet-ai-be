import { Injectable } from '@nestjs/common';
import { CreateUserDetailDto } from './dto/create-user_detail.dto';
import { UpdateUserDetailDto } from './dto/update-user_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDetail } from './entities/user_detail.entity';

@Injectable()
export class UserDetailService {
  constructor(
    @InjectRepository(UserDetail)
    private readonly userDetailRepository: Repository<UserDetail>,
  ) {}

  create(createUserDetailDto: CreateUserDetailDto) {
    const newUserDetail = {
      ...createUserDetailDto,
      created_at: new Date(),
    };
    return this.userDetailRepository.create(newUserDetail);
  }

  findAll() {
    return `This action returns all userDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDetail`;
  }

  update(id: number, updateUserDetailDto: UpdateUserDetailDto) {
    return `This action updates a #${id} userDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDetail`;
  }
}

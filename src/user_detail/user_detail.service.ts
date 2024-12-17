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

  create(createUserDetailDto: CreateUserDetailDto, user_id: number) {
    const newUserDetail = {
      ...createUserDetailDto,
      user_id,
      created_at: new Date(),
    };

    return this.userDetailRepository.save(newUserDetail);
  }

  findAll() {
    return `This action returns all userDetail`;
  }

  async findOne(user_id: number) {
    const user = await this.userDetailRepository.findOne({
      where: {
        user_id,
      },
    });

    if (!user) {
      return {
        status: 404,
        message: 'Kullanıcı detayı bulunamadı',
      };
    }

    return user;
  }

  update(id: number, updateUserDetailDto: UpdateUserDetailDto) {
    return `This action updates a #${id} userDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDetail`;
  }
}

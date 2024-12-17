import { Injectable } from '@nestjs/common';
import { CreateUserChatbotDto } from './dto/create-user_chatbot.dto';
import { UpdateUserChatbotDto } from './dto/update-user_chatbot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserChatbot } from './entities/user_chatbot.entity';

@Injectable()
export class UserChatbotsService {
  constructor(
    @InjectRepository(UserChatbot)
    private readonly userChatbotRepository: Repository<UserChatbot>,
  ) {}

  create(createUserChatbotDto: CreateUserChatbotDto) {
    return this.userChatbotRepository.save(createUserChatbotDto);
  }

  getUserChatbot(user_id: number) {
    return this.userChatbotRepository.find({
      where: {
        user_id,
      },
    });
  }

  findAll() {
    return this.userChatbotRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} userChatbot`;
  }

  update(id: number, updateUserChatbotDto: UpdateUserChatbotDto) {
    return `This action updates a #${id} userChatbot`;
  }

  remove(id: number) {
    return `This action removes a #${id} userChatbot`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { UpdateChatbotDto } from './dto/update-chatbot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chatbots } from './entities/chatbot.entity';

@Injectable()
export class ChatbotsService {
  constructor(
    @InjectRepository(Chatbots)
    private readonly chatbotRepository: Repository<Chatbots>,
  ) {}

  async create(createChatbotDto: CreateChatbotDto) {
    const newChatbot = this.chatbotRepository.create({
      ...createChatbotDto,
      created_at: new Date(),
    });

    return await this.chatbotRepository.save(newChatbot);
  }

  async findAll() {
    return await this.chatbotRepository.find();
  }

  findOne(id: number) {}

  update(id: number, updateChatbotDto: UpdateChatbotDto) {
    return `This action updates a #${id} chatbot`;
  }

  remove(id: number) {
    return this.chatbotRepository.delete(id);
  }
}

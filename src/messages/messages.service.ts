import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly messageRepository: Repository<Messages>,
  ) {}

  create(createMessageDto: CreateMessageDto) {
    const newMessage = {
      ...createMessageDto,
      created_at: new Date(),
    };

    return this.messageRepository.create(newMessage);
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}

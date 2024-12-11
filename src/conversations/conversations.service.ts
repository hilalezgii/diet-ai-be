import { Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user/user.entity";
import { Repository } from "typeorm";
import { Conversations } from "./entities/conversation.entity";

@Injectable()
export class ConversationsService {
  constructor(
    @InjectRepository(Conversations)
    private readonly conversationRepository: Repository<Conversations>,
  ) {}
  create(createConversationDto: CreateConversationDto) {
    const newConversation = {
      ...createConversationDto,
      created_at: new Date(),
    };
    return this.conversationRepository.create(newConversation);
  }

  findAll() {
    return `This action returns all conversations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}

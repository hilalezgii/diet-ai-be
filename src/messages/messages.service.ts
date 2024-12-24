import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './entities/message.entity';
import { OpenaiService } from '../openai/openai.service';
import OpenAI from 'openai';
import { ChatbotsService } from '../chatbots/chatbots.service';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages)
    private readonly messageRepository: Repository<Messages>,
    private readonly chatbotService: ChatbotsService,
    private readonly openaiService: OpenaiService,
  ) {}

  async create(createMessageDto: CreateMessageDto, userId: number) {
    const chatbot = await this.chatbotService.findOne(
      createMessageDto?.chatbot_id,
    );

    if (!chatbot) {
      return {
        message: 'Lütfen daha sonra tekrar deneyin.',
        status: 404,
      };
    }

    const newMessage = {
      ...createMessageDto,
      user_id: userId,
      sender: 'user',
      created_at: new Date(),
    };

    const messageHistory = await this.getMessageHistory(
      userId,
      createMessageDto?.chatbot_id,
    );

    await this.messageRepository.save(newMessage);

    const openaiRequest = {
      messages: [
        {
          role: 'system' as const,
          content: chatbot.system_message,
          refusal: null,
        },
        ...messageHistory,
        {
          role: 'user' as const,
          content: createMessageDto?.content,
          refusal: null,
        },
      ],
    };

    const getMessages = (await this.openaiService.getMessagesData(
      openaiRequest,
    )) as OpenAI.ChatCompletion;

    const openAiResult = this.openaiService.getChatOpenaiResponse(getMessages);

    if (!openAiResult?.result?.message?.content?.length) {
      return {
        message: 'Lütfen daha sonra tekrar deneyin.',
        status: 404,
      };
    }

    const newAssistantMessage = {
      chatbot_id: createMessageDto.chatbot_id,
      user_id: userId,
      content: openAiResult?.result?.message?.content,
      sender: 'assistant',
      created_at: new Date(),
    };

    this.messageRepository.save(newAssistantMessage);

    return {
      aiResult: openAiResult?.result?.message?.content,
      status: 200,
    };
  }

  getUserMessages(user_id: number, chatbot_id: number) {
    return this.messageRepository.find({
      where: { chatbot_id, user_id },
      order: { created_at: 'ASC' },
    });
  }

  async getMessageHistory(user_id: number, chatbot_id: number) {
    const messageHistory = await this.messageRepository.find({
      where: { chatbot_id, user_id },
      order: { created_at: 'DESC' },
      take: 3,
    });

    return messageHistory?.map((message) => ({
      role: message?.sender,
      content: message?.content,
      refusal: null,
    }));
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}

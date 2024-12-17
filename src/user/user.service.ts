import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatbotsService } from '../chatbots/chatbots.service';
import { UserChatbotsService } from '../user_chatbots/user_chatbots.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly chatbotService: ChatbotsService,
    private readonly userChatbotService: UserChatbotsService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await this.userRepository.save({
      email,
      password: hashedPassword,
    });

    const chatbots = await this.chatbotService.findAll();

    await this.userChatbotService.create(
      chatbots.map((chatbot) => ({
        user_id: user.id,
        chatbot_id: chatbot.id,
      })),
    );

    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find(); // Tüm kullanıcıları getirir
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } }); // Email'e göre kullanıcıyı bul
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }
}

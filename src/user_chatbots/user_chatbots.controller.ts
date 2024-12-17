import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserChatbotsService } from './user_chatbots.service';
import { CreateUserChatbotDto } from './dto/create-user_chatbot.dto';
import { UpdateUserChatbotDto } from './dto/update-user_chatbot.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user-chatbots')
export class UserChatbotsController {
  constructor(private readonly userChatbotsService: UserChatbotsService) {}

  @Post()
  create(@Body() createUserChatbotDto: CreateUserChatbotDto) {
    return this.userChatbotsService.create(createUserChatbotDto);
  }

  @Get()
  findAll() {
    return this.userChatbotsService.findAll();
  }

  @Get('get-user-chatbots')
  getUserChatbots(@Request() req) {
    const user_id = req.user?.userId;
    if (!user_id) {
      return {
        messages: 'Kullanıcıya ait chatbot bulunamadı.',
        status: 404,
      };
    }

    return this.userChatbotsService.getUserChatbot(user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userChatbotsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserChatbotDto: UpdateUserChatbotDto,
  ) {
    return this.userChatbotsService.update(+id, updateUserChatbotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userChatbotsService.remove(+id);
  }
}

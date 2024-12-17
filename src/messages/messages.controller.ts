import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto, @Request() req) {
    const userId = req?.user?.userId;

    if (!createMessageDto?.chatbot_id || !userId) {
      return {
        messages: 'Yetkisiz erişim.',
        status: 404,
      };
    }

    return this.messagesService.create(createMessageDto, Number(userId));
  }

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get('user-messages/:chatbot_id')
  getUserMessages(@Param('chatbot_id') chatbot_id: string, @Request() req) {
    const userId = req?.user?.userId;

    if (!userId) {
      return {
        messages: 'Yetkisiz erişim.',
        status: 404,
      };
    }

    return this.messagesService.getUserMessages(userId, Number(chatbot_id));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }
}

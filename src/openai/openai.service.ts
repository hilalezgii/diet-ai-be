import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

import { IChatResponse } from './openai.types';

@Injectable()
export class OpenaiService {
  private openAiService: OpenAI;

  constructor(private configService: ConfigService) {
    this.openAiService = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  async getMessagesData(request: any): Promise<OpenAI.ChatCompletion> {
    return this.openAiService.chat.completions.create({
      model: this.configService.get('OPENAI_API_MODEL'),
      messages: request.messages,
    });
  }

  getChatOpenaiResponse(message: OpenAI.ChatCompletion): IChatResponse {
    return {
      success: true,
      result: message?.choices?.length && message?.choices[0],
    };
  }
}

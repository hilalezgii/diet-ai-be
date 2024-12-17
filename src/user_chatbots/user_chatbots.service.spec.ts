import { Test, TestingModule } from '@nestjs/testing';
import { UserChatbotsService } from './user_chatbots.service';

describe('UserChatbotsService', () => {
  let service: UserChatbotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserChatbotsService],
    }).compile();

    service = module.get<UserChatbotsService>(UserChatbotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

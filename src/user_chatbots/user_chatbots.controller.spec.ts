import { Test, TestingModule } from '@nestjs/testing';
import { UserChatbotsController } from './user_chatbots.controller';
import { UserChatbotsService } from './user_chatbots.service';

describe('UserChatbotsController', () => {
  let controller: UserChatbotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserChatbotsController],
      providers: [UserChatbotsService],
    }).compile();

    controller = module.get<UserChatbotsController>(UserChatbotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

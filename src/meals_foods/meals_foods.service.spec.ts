import { Test, TestingModule } from '@nestjs/testing';
import { MealsFoodsService } from './meals_foods.service';

describe('MealsFoodsService', () => {
  let service: MealsFoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealsFoodsService],
    }).compile();

    service = module.get<MealsFoodsService>(MealsFoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

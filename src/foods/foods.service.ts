import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foods } from './entities/food.entity';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(Foods)
    private readonly foodRepository: Repository<Foods>,
  ) {}
  create(createFoodDto: CreateFoodDto) {
    const newFood = {
      ...createFoodDto,
      time: new Date(),
    };
    return this.foodRepository.create(newFood);
  }

  findAll() {
    return `This action returns all foods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}

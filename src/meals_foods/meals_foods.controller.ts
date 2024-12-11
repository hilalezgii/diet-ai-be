import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MealsFoodsService } from './meals_foods.service';
import { CreateMealsFoodDto } from './dto/create-meals_food.dto';
import { UpdateMealsFoodDto } from './dto/update-meals_food.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('meals-foods')
export class MealsFoodsController {
  constructor(private readonly mealsFoodsService: MealsFoodsService) {}

  @Post()
  create(@Body() createMealsFoodDto: CreateMealsFoodDto) {
    return this.mealsFoodsService.create(createMealsFoodDto);
  }

  @Get()
  findAll() {
    return this.mealsFoodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealsFoodsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMealsFoodDto: UpdateMealsFoodDto,
  ) {
    return this.mealsFoodsService.update(+id, updateMealsFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealsFoodsService.remove(+id);
  }
}

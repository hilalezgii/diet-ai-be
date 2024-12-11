import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foods } from './entities/food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Foods])],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}

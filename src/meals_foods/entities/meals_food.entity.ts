import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('meals_foods')
export class MealsFoods {
  @PrimaryGeneratedColumn()
  meal_id: number;

  @Column({ type: 'integer', unique: true })
  food_id: number;
}

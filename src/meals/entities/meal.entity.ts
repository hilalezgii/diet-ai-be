import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('meals')
export class Meals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', unique: true })
  diet_plan_id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @UpdateDateColumn()
  time: Date;
}

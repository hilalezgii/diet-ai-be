import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('foods')
export class Foods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', unique: true })
  diet_plan_id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'integer'})
  calories: number;

  @Column({ type: 'integer'})
  protein: number;

  @UpdateDateColumn()
  time: Date;
}

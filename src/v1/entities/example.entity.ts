import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Index,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ExampleEntity {
  @PrimaryGeneratedColumn('increment')
  id!: bigint;

  @Column({ type: 'uuid', unique: true })
  @Index()
  uuid!: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;
}

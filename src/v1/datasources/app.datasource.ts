import { DBConfig } from './../configs/db.config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ExampleEntity } from '../entities/example.entity';

export const AppDataSource = new DataSource({
  type: DBConfig.type,
  host: DBConfig.host,
  port: DBConfig.port,
  username: DBConfig.username,
  password: DBConfig.password,
  database: DBConfig.database,
  synchronize: DBConfig.synchronize,
  logging: process.env.NODE_ENV === 'dev' ? DBConfig.logging : false,
  entities: [ExampleEntity],
  migrations: ['./src/v1/migrations/*.ts'],
  subscribers: [],
});

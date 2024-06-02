import { AppDataSource } from '../datasources/app.datasource';
import { ExampleEntity } from '../entities/example.entity';

export const ExampleRepository = AppDataSource.getRepository(ExampleEntity);

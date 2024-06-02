import { Repository } from 'typeorm';
import { ExampleEntity } from './../entities/example.entity';
import { ExampleRepository } from '../repositories/example.repository';

export class ExampleDAO {
  private exampleRepository: Repository<ExampleEntity>;
  constructor() {
    this.exampleRepository = ExampleRepository;
  }

  async findOneById(id: bigint): Promise<ExampleEntity | null> {
    return await this.exampleRepository.findOneBy({
      id: id,
    });
  }

  async findOneByUUID(uuid: string): Promise<ExampleEntity | null> {
    return await this.exampleRepository.findOneBy({
      uuid: uuid,
    });
  }

  async save(device: ExampleEntity): Promise<ExampleEntity> {
    return await this.exampleRepository.save(device);
  }
}

import { ExampleEntity } from '../entities/example.entity';

export class ExampleDTO {
  uuid: string;
  created_at: Date;
  updated_at: Date;

  constructor(example: ExampleEntity) {
    this.uuid = example.uuid;
    this.created_at = example.created_at;
    this.updated_at = example.updated_at;
  }
}

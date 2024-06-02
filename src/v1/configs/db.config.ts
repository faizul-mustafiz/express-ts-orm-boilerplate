import { environment } from '../environments';

const {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USER_NAME,
  DB_NAME,
  DB_SYNCHRONIZER,
  DB_LOGGING,
} = environment;

export const DBConfig = {
  type: DB_TYPE,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER_NAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: JSON.parse(DB_SYNCHRONIZER),
  logging: JSON.parse(DB_LOGGING),
};

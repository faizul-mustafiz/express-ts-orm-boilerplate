import * as dotenv from 'dotenv';
import { DatabaseType } from '../enums/databaseType.enum';
dotenv.config();

export const parsedEnvironment = {
  // node environment variable
  NODE_ENV: process.env.NODE_ENV as string,
  //app environment variables
  API_PROTOCOL: process.env.API_PROTOCOL as string,
  API_HOST: process.env.API_HOST as string,
  API_PORT: process.env.API_PORT as string,
  API_VERSION: process.env.API_VERSION as string,
  ROUTE_PREFIX: process.env.ROUTE_PREFIX as string,
  // redis environment variables
  REDIS_URL: process.env.SMS_REDIS_URL as string,
  // DB environment variables
  DB_TYPE: process.env.DB_TYPE as DatabaseType,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: process.env.DB_PORT as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_USER_NAME: process.env.DB_USER_NAME as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_SYNCHRONIZER: process.env.DB_SYNCHRONIZER as string,
  DB_LOGGING: process.env.DB_LOGGING as string,
  // circuit breaker related variables
  TIMEOUT: process.env.TIMEOUT as string,
  RESET_TIMEOUT: process.env.RESET_TIMEOUT as string,
  ROLLING_COUNT_TIMEOUT: process.env.ROLLING_COUNT_TIMEOUT as string,
  ROLLING_COUNT_BUCKETS: process.env.ROLLING_COUNT_BUCKETS as string,
  ERROR_THRESHOLD_PERCENTAGE: process.env.ERROR_THRESHOLD_PERCENTAGE as string,
};

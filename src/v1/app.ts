import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import SwaggerUI from 'swagger-ui-express';
import docs from './docs';

import { ExampleRoutes } from './routes';
import { AppConfig } from './configs/app.config';
import { HttpLogger } from './loggers/httpLogger';
import { ErrorHandler } from './middlewares/errorHandler.middleware';
import { ErrorLogger } from './middlewares/errorLogger.middleware';
import { InitiateRedisPluginConnection } from './plugins/redis.plugin';
import { InvalidPath } from './middlewares/invalidPath.middleware';
import { InitiateDataSourcePluginConnection } from './plugins/datasource.plugin';

/**
 * * initiate express and express community middleware
 */
const { baseRoute } = AppConfig;
const app = express();
app.use(HttpLogger);
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(cors());
/**
 * * Connect to redis client
 */
InitiateRedisPluginConnection();
/**
 * * Initialize database connection
 */
InitiateDataSourcePluginConnection();
/**
 * * A basic health check route above all the routes for checking if the application is running
 */
app.get(`${baseRoute}/health`, (req, res) => {
  res.status(200).json({
    message: 'Basic Health Check.',
    environment: process.env.NODE_ENV,
  });
});
/**
 * * Route injection to the app module
 */
app.use(`${baseRoute}/example`, ExampleRoutes);
/**
 * * Route injection for swagger documentation
 */
app.use('/v1/docs', SwaggerUI.serve, SwaggerUI.setup(docs));
/**
 * * Error logger middleware
 * * Error handler middleware
 * * Invalid Path middleware
 */
app.use(ErrorLogger);
app.use(ErrorHandler);
app.use(InvalidPath);

export const App = app;

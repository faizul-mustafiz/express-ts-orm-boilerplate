import { AppDataSource } from '../datasources/app.datasource';
import { Logger } from '../loggers/logger';

const dataSourceInitiatedSuccessCallback = () => {
  Logger.debug(
    'data-source-init-success: %s',
    'Data Source initiation success',
  );
};

const dataSourceInitiatedErrorCallback = (err: Error) => {
  Logger.error('data-source-init-error:', err);
  DestroyDataSourcePluginConnection();
  process.exit(0);
};

const dataSourceDestroyedSuccessCallback = () => {
  Logger.debug(
    'data-source-destroy-success: %s',
    'Data Source destroy success',
  );
};

const dataSourceDestroyedErrorCallback = (err: Error) => {
  Logger.error('data-source-destroy-error:', err);
};

export const InitiateDataSourcePluginConnection = () => {
  if (!AppDataSource.isInitialized) {
    AppDataSource.initialize()
      .then(dataSourceInitiatedSuccessCallback)
      .catch(dataSourceInitiatedErrorCallback);
  }
};

export const DestroyDataSourcePluginConnection = () => {
  if (AppDataSource.isInitialized) {
    Logger.debug('Destroying data-source plugin connection...');
    AppDataSource.destroy()
      .then(dataSourceDestroyedSuccessCallback)
      .catch(dataSourceDestroyedErrorCallback);
  }
};

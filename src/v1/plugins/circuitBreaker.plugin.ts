import { AxiosRequestConfig, AxiosResponse } from 'axios';
import CircuitBreaker, { Stats } from 'opossum';
import { Logger } from '../loggers/logger';
import { CircuitBreakerConfig } from '../configs/circuitBreaker.config';

type AxiosCallFunction = (
  config: AxiosRequestConfig,
) => Promise<AxiosResponse<any>>;

interface CircuitBreakerPlugin {
  (config: AxiosRequestConfig): Promise<AxiosResponse<any>>;
  stats: Stats;
}

/**
 * * creating a circuit breaker function that returns a axios call with circuit breaker
 * @param axiosCall
 * @returns {CircuitBreakerPlugin}
 */
export const createAxiosCircuitBreaker = (
  axiosCall: AxiosCallFunction,
): CircuitBreakerPlugin => {
  /**
   * * creating the circuit breaker with axios call and  options
   */
  const breaker = new CircuitBreaker(axiosCall, CircuitBreakerConfig);

  /**
   * * get the stats of the circuit breaker
   */
  const stats: Stats = breaker.stats;

  /**
   * * listening to differ circuit breaker event and logging them
   */
  breaker.on('fire', () => Logger.info('Circuit Breaker Emitted: Fire event'));
  breaker.on('reject', () =>
    Logger.info('Circuit Breaker Emitted: Reject event'),
  );
  breaker.on('timeout', () =>
    Logger.info('Circuit Breaker Emitted: Timeout event'),
  );
  breaker.on('success', () =>
    Logger.info('Circuit Breaker Emitted: Success event'),
  );
  breaker.on('failure', () =>
    Logger.info('Circuit Breaker Emitted: Failure event'),
  );
  breaker.on('open', () => Logger.info('Circuit Breaker Emitted: Open event'));
  breaker.on('halfOpen', () =>
    Logger.info('Circuit Breaker Emitted: Half-Open event'),
  );
  breaker.on('close', () =>
    Logger.info('Circuit Breaker Emitted: Close event'),
  );

  /**
   * * firing the circuit breaker with the axios request
   */
  return Object.assign(
    async (config: AxiosRequestConfig): Promise<AxiosResponse<any>> => {
      try {
        const response = await breaker.fire(config);
        Logger.debug('circuit-breaker-plugin-response: %s', response);
        return response;
      } catch (error: any) {
        return error;
      }
    },
    {
      stats,
    },
  );
};

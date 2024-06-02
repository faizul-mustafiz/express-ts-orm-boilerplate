import CircuitBreaker from 'opossum';
import { environment } from '../environments';

const {
  TIMEOUT,
  RESET_TIMEOUT,
  ROLLING_COUNT_TIMEOUT,
  ROLLING_COUNT_BUCKETS,
  ERROR_THRESHOLD_PERCENTAGE,
} = environment;

export const CircuitBreakerConfig: CircuitBreaker.Options = {
  timeout: Number(TIMEOUT), // timeout if the function takes longer period to trigger failure
  resetTimeout: Number(RESET_TIMEOUT), // The time in milliseconds to wait before setting the breaker to halfOpen state, and trying the action again.
  rollingCountTimeout: Number(ROLLING_COUNT_TIMEOUT), // Time window for counting failures
  rollingCountBuckets: Number(ROLLING_COUNT_BUCKETS), // Number of buckets in the rolling window
  errorThresholdPercentage: Number(ERROR_THRESHOLD_PERCENTAGE), // Failure threshold for opening the circuit
};

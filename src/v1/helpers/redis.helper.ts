import { Logger } from '../loggers/logger';
import { RedisClient } from '../plugins/redis.plugin';

/**
 * * generic reusable methods for tokens
 */
export const isIdentityExists = async (identity: string) => {
  try {
    let result = await RedisClient.exists(identity);
    Logger.debug('isIdentityExists-result: %s', result);
    return result;
  } catch (error) {
    Logger.error('isIdentityExists-error:', error);
  }
};
/**
 * * string store related methods
 */
export const setIdentity = async (
  identity: string,
  expiry: number,
  payload: any,
) => {
  try {
    let result = await RedisClient.set(identity, payload);
    await RedisClient.expireAt(identity, expiry);
    Logger.debug('setIdentity-result: %s', result);
    return result;
  } catch (error) {
    Logger.error('setIdentity-error:', error);
  }
};
export const setIdentityWithNoExpiry = async (
  identity: string,
  payload: any,
) => {
  try {
    let result = await RedisClient.set(identity, payload);
    Logger.debug('setIdentityWithNoExpiry-result: %s', result);
    return result;
  } catch (error) {
    Logger.error('setIdentityWithNoExpiry-error:', error);
  }
};
export const getIdentityPayload = async (identity: string) => {
  try {
    let result = await RedisClient.get(identity);
    Logger.debug('getIdentityPayload-result: %s', result);
    return result;
  } catch (error) {
    Logger.error('getIdentityPayload-error:', error);
  }
};
/**
 * * hash map store related methods
 */
export const setIdentityWithHSet = async (
  identity: string,
  expiry: number,
  payload: any,
) => {
  try {
    let result = await RedisClient.hSet(identity, payload);
    await RedisClient.expireAt(identity, expiry);
    Logger.debug('setIdentityWithHSet-result: %s', result);
    return result;
  } catch (error) {
    Logger.error('setIdentityWithHSet-error:', error);
  }
};
export const setIdentityWithHSetNoExpiry = async (
  identity: string,
  payload: any,
) => {
  try {
    let result = await RedisClient.hSet(identity, payload);
    Logger.debug('setIdentityWithHSetNoExpiry-result: %s', result);
  } catch (error) {
    Logger.error('setIdentityWithHSetNoExpiry-error:', error);
  }
};
export const getHSetIdentityPayload = async (identity: string) => {
  try {
    let result = await RedisClient.hGetAll(identity);
    Logger.debug('getIdentityPayload-result: %s', result);
    return result;
  } catch (error) {
    Logger.error('getHSetIdentityPayload-error:', error);
  }
};
export const deleteIdentity = async (identity: string) => {
  try {
    let result = await RedisClient.del(identity);
    Logger.debug('deleteIdentity-result: %s', result);
    return result;
  } catch (error) {
    Logger.error('deleteIdentity-error:', error);
  }
};

/**
 * * clean up redis db related method
 */
export const deleteDataFromRedis = async () => {
  try {
    const result = await RedisClient.flushDb();
    Logger.debug('deleteDataFromRedis-result: %s', result);
  } catch (error) {
    Logger.error('deleteDataFromRedis-error', error);
  }
};

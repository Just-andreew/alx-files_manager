import { promisify } from 'util';
import { createClient } from 'redis';

/**
 * RepsRedis client.
 */
class RedisClient {
  /**
   * Creates a RedisClient instance.
   */
  constructor() {
    this.client = createClient();
    this.isClientConnected = true;
    this.client.on('error', (err) => {
      console.error('Redis client failed to connect:', err.message || err.toString());
      this.isClientConnected = false;
    });
    this.client.on('connect', () => {
      this.isClientConnected = true;
    });
  }

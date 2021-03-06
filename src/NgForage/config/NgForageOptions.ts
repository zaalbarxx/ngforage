import 'localforage';

/**
 * NgForage configuration
 */
export interface NgForageOptions extends LocalForageOptions {
  /**
   * Cache time in milliseconds
   * @default 300000
   */
  cacheTime?: number;
}

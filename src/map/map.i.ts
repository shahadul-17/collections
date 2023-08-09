import { MapEntry } from "./map-entry.t";

export interface IMap<KeyType extends string, ValueType> {

  /**
   * Returns the number of elements in this map.
   * @returns The number of elements in this map.
   */
  get size(): number;

  /**
   * Returns an array that contains the keys for each element in the Map object.
   * @returns An array containing the keys.
   */
  keys(): Array<KeyType>;

  /**
   * Returns an array that contains all the values in the Map object.
   * @returns An array containing the values.
   */
  values(): Array<ValueType>;

  /**
   * Returns an array that contains all the entries in the Map object.
   * @returns An array containing the entries.
   */
  entries(): Array<MapEntry<KeyType, ValueType>>;

  /**
   * Returns a boolean indicating whether an element with the specified key exists or not.
   * @param key The key of the element to test for presence in the Map object.
   * @returns True if an element with the specified key exists in the Map object. Otherwise false.
   */
  has(key: KeyType): boolean;

  /**
   * Returns a specified element from the Map object.
   * @param key The key of the element to return from the Map object.
   * @returns The element associated with the specified key,
   * or 'undefined' if the key can't be found in the Map object.
   */
  get(key: KeyType): undefined | ValueType;

  /**
   * Adds or updates an entry in the Map object with a specified key and a value.
   * @param key The key of the element to add to the Map object.
   * @param value The value of the element to add to the Map object.
   * @returns The Map object.
   */
  set(key: KeyType, value: ValueType): IMap<KeyType, ValueType>;

  /**
   * Removes the specified element from the Map object by key.
   * @param key The key of the element to remove from the Map object.
   * @returns The value that was removed from the Map object. Otherwise returns 'undefined'.
   */
  delete(key: KeyType): undefined | ValueType;

  /**
   * Removes all elements from the Map object.
   * @returns The Map object.
   */
  clear(): IMap<KeyType, ValueType>;
}

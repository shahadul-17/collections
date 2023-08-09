import { MapEntry } from "./map-entry.t";
import { IMap } from "./map.i";

const KEY_PREFIX = "$MK_";

export class Map<KeyType extends string, ValueType> implements IMap<KeyType, ValueType> {

  private elementCount: number = 0;
  private readonly elements: Record<string, ValueType> = Object.create(null);

  public get size(): number {
    return this.elementCount;
  }

  public keys(): Array<KeyType> {
    let key: KeyType;
    const internalKeys = Object.keys(this.elements);
    const keys: Array<KeyType> = [];

    for (let i = 0; i < internalKeys.length; ++i) {
      key = Map.removePrefixFromInternalKey(internalKeys[i]) as KeyType;
      keys.push(key);
    }

    return keys;
  }

  public values(): Array<ValueType> {
    let value: ValueType;
    const internalKeys = Object.keys(this.elements);
    const values: Array<ValueType> = [];

    for (let i = 0; i < internalKeys.length; ++i) {
      value = this.elements[internalKeys[i]];

      values.push(value);
    }

    return values;
  }

  public entries(): Array<MapEntry<KeyType, ValueType>> {
    let internalKey: string;
    let key: KeyType;
    let value: ValueType;
    let entry: MapEntry<KeyType, ValueType>;
    const internalKeys = Object.keys(this.elements);
    const entries = new Array<MapEntry<KeyType, ValueType>>(internalKeys.length);

    for (let i = 0; i < internalKeys.length; ++i) {
      internalKey = internalKeys[i];
      key = Map.removePrefixFromInternalKey(internalKey) as KeyType;
      value = this.elements[internalKey];
      entry = Object.create(null);
      entry.key = key;
      entry.value = value;

      entries[i] = entry;
    }

    return entries;
  }

  public has(key: KeyType): boolean {
    const value = this.get(key);

    return typeof value === "undefined";
  }

  public get(key: KeyType): undefined | ValueType {
    if (!Map.isValidKey(key)) { throw new Error("Invalid key provided."); }

    const internalKey = Map.addPrefixToKey(key);

    return this.elements[internalKey];
  }

  public set(key: KeyType, value: ValueType): IMap<KeyType, ValueType> {
    if (!Map.isValidKey(key)) { throw new Error("Invalid key provided."); }
    // we don't want to set 'undefined' value to map...
    if (typeof value === "undefined") { return this; }

    const internalKey = Map.addPrefixToKey(key);
    const existingValue = this.elements[internalKey];

    this.elements[internalKey] = value;

    // if a value was not previously present
    // in the map object for the specified key...
    if (typeof existingValue === "undefined") {
      // we shall increment the entry count...
      ++this.elementCount;
    }

    return this;
  }

  public delete(key: KeyType): undefined | ValueType {
    if (!Map.isValidKey(key)) { throw new Error("Invalid key provided."); }

    const internalKey = Map.addPrefixToKey(key);
    const value = this.elements[internalKey];

    if (typeof value === "undefined") { return value; }

    delete this.elements[internalKey];

    --this.elementCount;

    return value;
  }

  public clear(): IMap<KeyType, ValueType> {
    let internalKey: string;
    const internalKeys = Object.keys(this.elements);

    for (let i = 0; i < internalKeys.length; ++i) {
      internalKey = internalKeys[i];

      // deletes the entry from the map...
      delete this.elements[internalKey];
    }

    this.elementCount = 0;

    return this;
  }

  private static isValidKey(key: any): boolean {
    switch (typeof key) {
      case "string":
      case "boolean":
      case "bigint":
        return true;
      case "number":
        return !isNaN(key);
      // case "undefined":
      // case "object":
      // case "function":
      // case "symbol":
      default:
        return false;
    };
  }

  private static addPrefixToKey(key: number | string): string {
    return `${KEY_PREFIX}${key}`;
  }

  private static removePrefixFromInternalKey(internalKey: string): string {
    return internalKey.substring(KEY_PREFIX.length);
  }
}

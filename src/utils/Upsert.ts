
// @ts-ignore
WeakMap.prototype.getOrInsert ??= function (key, defaultValue) {
    if (!this.has(key)) { this.set(key, defaultValue); }
    return this.get(key);
};

// @ts-ignore
WeakMap.prototype.getOrInsertComputed ??= function (key, callbackFunction) {
    if (!this.has(key)) { this.set(key, callbackFunction(key)); }
    return this.get(key);
};

// @ts-ignore
Map.prototype.getOrInsert ??= function (key, defaultValue) {
    if (!this.has(key)) { this.set(key, defaultValue); }
    return this.get(key);
};

// @ts-ignore
Map.prototype.getOrInsertComputed ??= function (key, callbackFunction) {
    if (!this.has(key)) { this.set(key, callbackFunction(key)); }
    return this.get(key);
};

/**
 * Get a value from a Map, or insert a default value if the key doesn't exist.
 * @template K - The key type
 * @template V - The value type
 * @param map - The Map to get or insert into
 * @param key - The key to look up
 * @param defaultValue - A function that returns the default value to insert if the key doesn't exist
 * @returns The value from the map (existing or newly inserted)
 */
export const getOrInsert = <K, V>(map: Map<K, V>, key: K, defaultValue: () => V = () => (null as unknown as V)) => {
    if (!map?.has?.(key)) { map?.set?.(key, defaultValue?.()); }
    return map?.get?.(key) as V;
};

/**
 * Get a value from a Map, or insert a computed value if the key doesn't exist.
 * @template K - The key type
 * @template V - The value type
 * @param map - The Map to get or insert into
 * @param key - The key to look up
 * @param callbackFunction - A function that computes the value to insert based on the key
 * @returns The value from the map (existing or newly computed and inserted)
 */
export const getOrInsertComputed = <K, V>(map: Map<K, V>, key: K, callbackFunction: (key: K) => V = () => (null as unknown as V)) => {
    if (!map?.has?.(key)) { map?.set?.(key, callbackFunction?.(key)); }
    return map?.get?.(key) as V;
};

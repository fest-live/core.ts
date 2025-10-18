
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

//
export const getOrInsert = <K, V>(map: Map<K, V>, key: K, defaultValue: () => V = () => (null as unknown as V)) => {
    if (!map?.has?.(key)) { map?.set?.(key, defaultValue?.()); }
    return map?.get?.(key) as V;
};

//
export const getOrInsertComputed = <K, V>(map: Map<K, V>, key: K, callbackFunction: (key: K) => V = () => (null as unknown as V)) => {
    if (!map?.has?.(key)) { map?.set?.(key, callbackFunction?.(key)); }
    return map?.get?.(key) as V;
};

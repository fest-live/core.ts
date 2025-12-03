[**@fest-lib/core v0.0.0**](../README.md)

***

[@fest-lib/core](../README.md) / getOrInsertComputed

# Function: getOrInsertComputed()

```ts
function getOrInsertComputed<K, V>(
   map, 
   key, 
   callbackFunction): V;
```

Defined in: [Upsert.ts:49](https://github.com/fest-live/core.ts/blob/e528d9a238726823be1c3d912012f65a727f02a2/src/utils/Upsert.ts#L49)

Get a value from a Map, or insert a computed value if the key doesn't exist.

## Type Parameters

### K

`K`

The key type

### V

`V`

The value type

## Parameters

### map

`Map`\<`K`, `V`\>

The Map to get or insert into

### key

`K`

The key to look up

### callbackFunction

(`key`) => `V`

A function that computes the value to insert based on the key

## Returns

`V`

The value from the map (existing or newly computed and inserted)

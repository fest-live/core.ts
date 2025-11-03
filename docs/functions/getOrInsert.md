[**@fest/core v0.0.0**](../README.md)

***

[@fest/core](../README.md) / getOrInsert

# Function: getOrInsert()

```ts
function getOrInsert<K, V>(
   map, 
   key, 
   defaultValue): V;
```

Defined in: [Upsert.ts:35](https://github.com/fest-live/core.ts/blob/f90251060ec37c3104c9ee2585e6f42acaa41f43/src/utils/Upsert.ts#L35)

Get a value from a Map, or insert a default value if the key doesn't exist.

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

### defaultValue

() => `V`

A function that returns the default value to insert if the key doesn't exist

## Returns

`V`

The value from the map (existing or newly inserted)

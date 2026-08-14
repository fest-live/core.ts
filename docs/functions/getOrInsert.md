[**@fest-lib/core v0.1.7**](../README.md)

***

[@fest-lib/core](../README.md) / getOrInsert

# Function: getOrInsert()

```ts
function getOrInsert<K, V>(
   map, 
   key, 
   defaultValue?): V;
```

Defined in: Upsert.ts:35

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

### defaultValue?

() => `V`

A function that returns the default value to insert if the key doesn't exist

## Returns

`V`

The value from the map (existing or newly inserted)

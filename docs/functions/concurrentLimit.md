[**@fest-lib/core v0.1.27**](../README.md)

***

[@fest-lib/core](../README.md) / concurrentLimit

# Function: concurrentLimit()

```ts
function concurrentLimit<T>(operations, limit): Promise<T[]>;
```

Defined in: PromiseUtils.ts:159

Execute operations concurrently with a limit

## Type Parameters

### T

`T`

## Parameters

### operations

() => `Promise`\<`T`\>[]

### limit

`number`

## Returns

`Promise`\<`T`[]\>

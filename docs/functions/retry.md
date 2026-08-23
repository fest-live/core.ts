[**@fest-lib/core v0.1.13**](../README.md)

***

[@fest-lib/core](../README.md) / retry

# Function: retry()

```ts
function retry<T>(
   operation, 
   maxRetries?, 
   initialDelay?, 
backoffMultiplier?): Promise<T>;
```

Defined in: PromiseUtils.ts:102

Retry an async operation with exponential backoff

## Type Parameters

### T

`T`

## Parameters

### operation

() => `Promise`\<`T`\>

### maxRetries?

`number` = `3`

### initialDelay?

`number` = `1000`

### backoffMultiplier?

`number` = `2`

## Returns

`Promise`\<`T`\>

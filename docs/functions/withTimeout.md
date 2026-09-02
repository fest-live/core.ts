[**@fest-lib/core v0.1.19**](../README.md)

***

[@fest-lib/core](../README.md) / withTimeout

# Function: withTimeout()

```ts
function withTimeout<T>(
   promise, 
   timeoutMs, 
timeoutMessage?): Promise<T>;
```

Defined in: PromiseUtils.ts:91

Create a timeout promise that rejects after specified time

## Type Parameters

### T

`T`

## Parameters

### promise

`Promise`\<`T`\>

### timeoutMs

`number`

### timeoutMessage?

`string` = `'Operation timed out'`

## Returns

`Promise`\<`T`\>

[**@fest/core v0.0.0**](../README.md)

***

[@fest/core](../README.md) / Promised

# Function: Promised()

```ts
function Promised<T>(
   promise, 
   resolve?, 
   reject?): any;
```

Defined in: [Promised.ts:165](https://github.com/fest-live/core.ts/blob/f90251060ec37c3104c9ee2585e6f42acaa41f43/src/utils/Promised.ts#L165)

Wrap a promise or value in a Proxy that allows synchronous property access.
For resolved promises, this enables accessing properties as if the promise was already resolved.

## Type Parameters

### T

`T` = `any`

The resolved value type

## Parameters

### promise

`any`

The promise or value to wrap

### resolve?

Optional resolve callback

`null` | (...`args`) => `void`

### reject?

Optional reject callback

`null` | (...`args`) => `void`

## Returns

`any`

A proxy that allows synchronous-style access to promise values

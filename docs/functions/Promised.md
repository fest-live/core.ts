[**@fest-lib/core v0.1.14**](../README.md)

***

[@fest-lib/core](../README.md) / Promised

# Function: Promised()

```ts
function Promised<T>(
   promise, 
   resolve?, 
   reject?): any;
```

Defined in: Promised.ts:168

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

((...`args`) => `void`) \| `null`

Optional resolve callback

### reject?

((...`args`) => `void`) \| `null`

Optional reject callback

## Returns

`any`

A proxy that allows synchronous-style access to promise values

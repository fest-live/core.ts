[**@fest-lib/core v0.0.0**](../README.md)

***

[@fest-lib/core](../README.md) / Promised

# Function: Promised()

```ts
function Promised<T>(
   promise, 
   resolve?, 
   reject?): any;
```

Defined in: [Promised.ts:165](https://github.com/fest-live/core.ts/blob/2cddd2eb563549b1305c7b2fc88f882dfe9e484a/src/utils/Promised.ts#L165)

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

(...`args`) => `void` | `null`

### reject?

Optional reject callback

(...`args`) => `void` | `null`

## Returns

`any`

A proxy that allows synchronous-style access to promise values

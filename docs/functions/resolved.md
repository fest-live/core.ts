[**@fest-lib/core v0.1.21**](../README.md)

***

[@fest-lib/core](../README.md) / resolved

# Function: resolved()

```ts
function resolved<T>(value, mode?): Promise<any>;
```

Defined in: Resolved.ts:93

Await a value with the matching Promise combinator (`all` / `allKeyed` / settled variants).
Nested records, arrays, maps, sets, and `@promise` slots are walked once.

## Type Parameters

### T

`T` = `any`

## Parameters

### value

`T`

### mode?

[`ResolvedMode`](../type-aliases/ResolvedMode.md) = `"all"`

## Returns

`Promise`\<`any`\>

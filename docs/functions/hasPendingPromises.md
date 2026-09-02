[**@fest-lib/core v0.1.20**](../README.md)

***

[@fest-lib/core](../README.md) / hasPendingPromises

# Function: hasPendingPromises()

```ts
function hasPendingPromises(value, seen?): boolean;
```

Defined in: Resolved.ts:45

True when a value (or a nested enumerable field) still needs a Promise combinator.

## Parameters

### value

`any`

### seen?

`WeakSet`\<`object`\>

## Returns

`boolean`

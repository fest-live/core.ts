[**@fest-lib/core v0.0.0**](../README.md)

***

[@fest-lib/core](../README.md) / WRef

# Function: WRef()

```ts
function WRef<T>(target): WR<T>;
```

Defined in: [WRef.ts:99](https://github.com/fest-live/core.ts/blob/2cddd2eb563549b1305c7b2fc88f882dfe9e484a/src/utils/WRef.ts#L99)

Create a WeakRef wrapper proxy that allows safe access to weakly referenced objects.
The proxy automatically dereferences WeakRefs when accessing properties and handles
function calls on weakly referenced objects.

## Type Parameters

### T

`T` *extends* `object` \| `Function`

The type of the target object (must be object or Function)

## Parameters

### target

The target object or WeakRef to wrap

`T` | `WeakRef`\<`T`\>

## Returns

[`WR`](../type-aliases/WR.md)\<`T`\>

A proxy that safely accesses the weakly referenced object

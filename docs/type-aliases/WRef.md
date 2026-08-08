[**@fest-lib/core v0.1.5**](../README.md)

***

[@fest-lib/core](../README.md) / WRef

# Type Alias: WRef\<T\>

```ts
type WRef<T> = { [K in keyof T]: T[K] extends (args: infer A) => infer R ? (args: A) => WRef<R> | null : T[K] | null };
```

Defined in: WRef.ts:99

Create a WeakRef wrapper proxy that allows safe access to weakly referenced objects.
The proxy automatically dereferences WeakRefs when accessing properties and handles
function calls on weakly referenced objects.

## Type Parameters

### T

`T`

The type of the target object (must be object or Function)

## Param

**target**

The target object or WeakRef to wrap

## Returns

A proxy that safely accesses the weakly referenced object

[**@fest-lib/core v0.1.14**](../README.md)

***

[@fest-lib/core](../README.md) / WR

# Type Alias: WR\<T\>

```ts
type WR<T> = { [K in keyof T]: T[K] extends (args: infer A) => infer R ? (args: A) => WR<R> | null : T[K] | null };
```

Defined in: WRef.ts:85

## Type Parameters

### T

`T`

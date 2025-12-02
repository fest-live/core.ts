[**@fest-lib/core v0.0.0**](../README.md)

***

[@fest-lib/core](../README.md) / WR

# Type Alias: WR\<T\>

```ts
type WR<T> = { [K in keyof T]: T[K] extends (args: infer A) => infer R ? (args: A) => WR<R> | null : T[K] | null };
```

Defined in: [WRef.ts:85](https://github.com/fest-live/core.ts/blob/f90251060ec37c3104c9ee2585e6f42acaa41f43/src/utils/WRef.ts#L85)

## Type Parameters

### T

`T`

[**@fest-lib/core v0.0.0**](../README.md)

***

[@fest-lib/core](../README.md) / WR

# Type Alias: WR\<T\>

```ts
type WR<T> = { [K in keyof T]: T[K] extends (args: infer A) => infer R ? (args: A) => WR<R> | null : T[K] | null };
```

Defined in: [WRef.ts:85](https://github.com/fest-live/core.ts/blob/e528d9a238726823be1c3d912012f65a727f02a2/src/utils/WRef.ts#L85)

## Type Parameters

### T

`T`

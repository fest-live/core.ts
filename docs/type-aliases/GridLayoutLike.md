[**@fest-lib/core v0.1.15**](../README.md)

***

[@fest-lib/core](../README.md) / GridLayoutLike

# Type Alias: GridLayoutLike

```ts
type GridLayoutLike = 
  | [number, number]
  | readonly [number, number]
  | {
  columns?: number;
  rows?: number;
}
  | null
  | undefined;
```

Defined in: Types.ts:9

Tuple `[columns, rows]` or `{ columns, rows }` (speed-dial / launcher grids).

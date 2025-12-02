[**@fest-lib/core v0.0.0**](../README.md)

***

[@fest-lib/core](../README.md) / redirectCell

# Function: redirectCell()

```ts
function redirectCell($preCell, gridArgs): [number, number];
```

Defined in: [GridItemUtils.ts:17](https://github.com/fest-live/core.ts/blob/2cddd2eb563549b1305c7b2fc88f882dfe9e484a/src/utils/GridItemUtils.ts#L17)

Find a non-busy cell near the preferred cell in a grid layout.
If the preferred cell is busy, searches nearby cells to find an available one.

## Parameters

### $preCell

\[`number`, `number`\]

Preferred cell coordinates [column, row]

### gridArgs

[`GridArgsType`](../interfaces/GridArgsType.md)

Grid arguments containing items, layout, and size information

## Returns

\[`number`, `number`\]

Cell coordinates [column, row] that are not busy

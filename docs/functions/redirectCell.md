[**@fest/core v0.0.0**](../README.md)

***

[@fest/core](../README.md) / redirectCell

# Function: redirectCell()

```ts
function redirectCell($preCell, gridArgs): [number, number];
```

Defined in: [GridItemUtils.ts:17](https://github.com/fest-live/core.ts/blob/f90251060ec37c3104c9ee2585e6f42acaa41f43/src/utils/GridItemUtils.ts#L17)

Find a non-busy cell near the preferred cell in a grid layout.
If the preferred cell is busy, searches nearby cells to find an available one.

## Parameters

### $preCell

\[`number`, `number`\]

Preferred cell coordinates [column, row]

### gridArgs

`GridArgsType`

Grid arguments containing items, layout, and size information

## Returns

\[`number`, `number`\]

Cell coordinates [column, row] that are not busy

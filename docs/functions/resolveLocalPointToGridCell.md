[**@fest-lib/core v0.1.21**](../README.md)

***

[@fest-lib/core](../README.md) / resolveLocalPointToGridCell

# Function: resolveLocalPointToGridCell()

```ts
function resolveLocalPointToGridCell(
   localPx, 
   size, 
   layout, 
   orient, 
   options?): [number, number];
```

Defined in: GridItemUtils.ts:35

Point in grid **local** CSS pixels (origin top-left of grid content box), orientation index from `orientOf(grid)`.
Used by launcher hit-testing; DOM wrappers live in `fest/dom`.

## Parameters

### localPx

\[`number`, `number`\]

### size

\[`number`, `number`\]

### layout

[`GridLayoutLike`](../type-aliases/GridLayoutLike.md)

### orient

`number`

### options?

#### mode?

`"floor"` \| `"round"`

#### redirect?

`Pick`\<[`GridArgsType`](../interfaces/GridArgsType.md), `"items"` \| `"item"` \| `"list"`\>

## Returns

\[`number`, `number`\]

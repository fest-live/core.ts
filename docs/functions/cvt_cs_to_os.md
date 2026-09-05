[**@fest-lib/core v0.1.27**](../README.md)

***

[@fest-lib/core](../README.md) / cvt\_cs\_to\_os

# Function: cvt\_cs\_to\_os()

```ts
function cvt_cs_to_os(
   pos_in_cs, 
   size_in_cs, 
   or_i?): [number, number];
```

Defined in: Convert.ts:11

Orientation-space transforms for grids and drag vectors.
Used by `GridItemUtils` / `resolveLocalPointToGridCell` and `fest/dom` launcher hit-testing.

Convert position from client space to orientation space.

## Parameters

### pos\_in\_cs

\[`number`, `number`\]

Position in client space [x, y]

### size\_in\_cs

\[`number`, `number`\]

Size in client space [width, height]

### or\_i?

`number` = `0`

Orientation index (0=normal, 1=90° swapped, 2=180°, 3=270° swapped)

## Returns

\[`number`, `number`\]

Position in orientation space [x, y]

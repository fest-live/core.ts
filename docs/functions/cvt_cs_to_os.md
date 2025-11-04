[**@fest/core v0.0.0**](../README.md)

***

[@fest/core](../README.md) / cvt\_cs\_to\_os

# Function: cvt\_cs\_to\_os()

```ts
function cvt_cs_to_os(
   pos_in_cs, 
   size_in_cs, 
   or_i): [number, number];
```

Defined in: [Convert.ts:8](https://github.com/fest-live/core.ts/blob/f90251060ec37c3104c9ee2585e6f42acaa41f43/src/utils/Convert.ts#L8)

Convert position from client space to orientation space.

## Parameters

### pos\_in\_cs

\[`number`, `number`\]

Position in client space [x, y]

### size\_in\_cs

\[`number`, `number`\]

Size in client space [width, height]

### or\_i

`number` = `0`

Orientation index (0=normal, 1=90° swapped, 2=180°, 3=270° swapped)

## Returns

\[`number`, `number`\]

Position in orientation space [x, y]

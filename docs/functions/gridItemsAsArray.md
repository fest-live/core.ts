[**@fest-lib/core v0.1.24**](../README.md)

***

[@fest-lib/core](../README.md) / gridItemsAsArray

# Function: gridItemsAsArray()

```ts
function gridItemsAsArray(items): GridItemType[];
```

Defined in: GridItemUtils.ts:67

Normalize grid item collections for algorithms that expect an array (Orient desktop uses `Map`, SpeedDial uses arrays).

## Parameters

### items

  \| `Map`\<`string`, [`GridItemType`](../interfaces/GridItemType.md)\>
  \| `Set`\<[`GridItemType`](../interfaces/GridItemType.md)\>
  \| [`GridItemType`](../interfaces/GridItemType.md)[]
  \| `null`
  \| `undefined`

## Returns

[`GridItemType`](../interfaces/GridItemType.md)[]

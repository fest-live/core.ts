[**@fest-lib/core v0.1.20**](../README.md)

***

[@fest-lib/core](../README.md) / allKeyed

# Function: allKeyed()

```ts
function allKeyed<D>(promises): Promise<{ [K in string | number | symbol]: Awaited<D[K]> }>;
```

Defined in: PromiseUtils.ts:12

Await a record of thenables as a same-shaped object (`Promise.allKeyed`).

## Type Parameters

### D

`D` *extends* `Record`\<`string` \| `symbol`, `unknown`\>

## Parameters

### promises

`D`

## Returns

`Promise`\<\{ \[K in string \| number \| symbol\]: Awaited\<D\[K\]\> \}\>

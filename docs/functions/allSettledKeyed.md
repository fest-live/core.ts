[**@fest-lib/core v0.1.21**](../README.md)

***

[@fest-lib/core](../README.md) / allSettledKeyed

# Function: allSettledKeyed()

```ts
function allSettledKeyed<D>(promises): Promise<{ [K in string | number | symbol]: PromiseSettledResult<Awaited<D[K]>> }>;
```

Defined in: PromiseUtils.ts:19

Settle a record of thenables as a same-shaped object (`Promise.allSettledKeyed`).

## Type Parameters

### D

`D` *extends* `Record`\<`string` \| `symbol`, `unknown`\>

## Parameters

### promises

`D`

## Returns

`Promise`\<\{ \[K in string \| number \| symbol\]: PromiseSettledResult\<Awaited\<D\[K\]\>\> \}\>

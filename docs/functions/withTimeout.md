[**@fest-lib/core v0.1.27**](../README.md)

***

[@fest-lib/core](../README.md) / withTimeout

# Function: withTimeout()

## Call Signature

```ts
function withTimeout<D>(
   promises, 
   timeoutMs, 
timeoutMessage?): Promise<{ [K in string | number | symbol]: Awaited<D[K]> }>;
```

Defined in: PromiseUtils.ts:110

Create a timeout promise that rejects after specified time.
A plain object of thenables is awaited via `Promise.allKeyed`.

### Type Parameters

#### D

`D` *extends* `Record`\<`string` \| `symbol`, `unknown`\>

### Parameters

#### promises

`D`

#### timeoutMs

`number`

#### timeoutMessage?

`string`

### Returns

`Promise`\<\{ \[K in string \| number \| symbol\]: Awaited\<D\[K\]\> \}\>

## Call Signature

```ts
function withTimeout<T>(
   promise, 
   timeoutMs, 
timeoutMessage?): Promise<T>;
```

Defined in: PromiseUtils.ts:115

Create a timeout promise that rejects after specified time.
A plain object of thenables is awaited via `Promise.allKeyed`.

### Type Parameters

#### T

`T`

### Parameters

#### promise

`Promise`\<`T`\>

#### timeoutMs

`number`

#### timeoutMessage?

`string`

### Returns

`Promise`\<`T`\>

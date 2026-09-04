[**@fest-lib/core v0.1.25**](../README.md)

***

[@fest-lib/core](../README.md) / createDeferred

# Function: createDeferred()

```ts
function createDeferred<T>(): object;
```

Defined in: PromiseUtils.ts:26

Create a promised value that resolves when set

## Type Parameters

### T

`T` = `any`

## Returns

`object`

### isRejected

```ts
isRejected: boolean;
```

### isResolved

```ts
isResolved: boolean;
```

### promise

```ts
promise: Promise<T>;
```

### reject

```ts
reject: (error) => void;
```

#### Parameters

##### error

`any`

#### Returns

`void`

### resolve

```ts
resolve: (value) => void;
```

#### Parameters

##### value

`T`

#### Returns

`void`

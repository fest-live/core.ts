[**@fest-lib/core v0.1.5**](../README.md)

***

[@fest-lib/core](../README.md) / AsyncQueue

# Class: AsyncQueue

Defined in: PromiseUtils.ts:47

Queue async operations and process them sequentially

## Constructors

### Constructor

```ts
new AsyncQueue(): AsyncQueue;
```

#### Returns

`AsyncQueue`

## Accessors

### isProcessing

#### Get Signature

```ts
get isProcessing(): boolean;
```

Defined in: PromiseUtils.ts:83

##### Returns

`boolean`

***

### length

#### Get Signature

```ts
get length(): number;
```

Defined in: PromiseUtils.ts:79

##### Returns

`number`

## Methods

### add()

```ts
add<T>(operation): Promise<T>;
```

Defined in: PromiseUtils.ts:51

#### Type Parameters

##### T

`T`

#### Parameters

##### operation

() => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

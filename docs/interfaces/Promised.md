[**@fest-lib/core v0.1.23**](../README.md)

***

[@fest-lib/core](../README.md) / Promised

# Interface: Promised

Defined in: Promised.ts:191

Wrap a promise or value in a Proxy that allows synchronous property access.
For resolved promises, this enables accessing properties as if the promise was already resolved.

## Template

**T**

The resolved value type

## Param

**promise**

The promise or value to wrap

## Param

**resolve**

Optional resolve callback

## Param

**reject**

Optional reject callback

## Methods

### allKeyed()

```ts
allKeyed<D>(
   promises, 
   resolve?, 
   reject?): any;
```

Defined in: Promised.ts:179

#### Type Parameters

##### D

`D` *extends* `Record`\<`string` \| `symbol`, `unknown`\>

#### Parameters

##### promises

`D`

##### resolve?

((...`args`) => `void`) \| `null`

##### reject?

((...`args`) => `void`) \| `null`

#### Returns

`any`

***

### allSettledKeyed()

```ts
allSettledKeyed<D>(
   promises, 
   resolve?, 
   reject?): any;
```

Defined in: Promised.ts:184

#### Type Parameters

##### D

`D` *extends* `Record`\<`string` \| `symbol`, `unknown`\>

#### Parameters

##### promises

`D`

##### resolve?

((...`args`) => `void`) \| `null`

##### reject?

((...`args`) => `void`) \| `null`

#### Returns

`any`

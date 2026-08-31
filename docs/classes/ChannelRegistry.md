[**@fest-lib/core v0.1.16**](../README.md)

***

[@fest-lib/core](../README.md) / ChannelRegistry

# Class: ChannelRegistry

Defined in: ChannelUtils.ts:8

Channel registry for managing multiple channels

## Constructors

### Constructor

```ts
new ChannelRegistry(): ChannelRegistry;
```

#### Returns

`ChannelRegistry`

## Methods

### clear()

```ts
clear(): void;
```

Defined in: ChannelUtils.ts:107

Clear all channels and listeners

#### Returns

`void`

***

### get()

```ts
get<T>(name): T | undefined;
```

Defined in: ChannelUtils.ts:36

Get a registered channel

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

#### Returns

`T` \| `undefined`

***

### getChannelNames()

```ts
getChannelNames(): string[];
```

Defined in: ChannelUtils.ts:100

Get all registered channel names

#### Returns

`string`[]

***

### has()

```ts
has(name): boolean;
```

Defined in: ChannelUtils.ts:43

Check if a channel is registered

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### onChannelChange()

```ts
onChannelChange(name, listener): () => void;
```

Defined in: ChannelUtils.ts:71

Listen for channel registration/unregistration

#### Parameters

##### name

`string`

##### listener

(`channel`) => `void`

#### Returns

() => `void`

***

### register()

```ts
register<T>(name, channel): T;
```

Defined in: ChannelUtils.ts:15

Register a channel

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

##### channel

`T`

#### Returns

`T`

***

### unregister()

```ts
unregister(name): boolean;
```

Defined in: ChannelUtils.ts:50

Unregister a channel

#### Parameters

##### name

`string`

#### Returns

`boolean`

[**@fest-lib/core v0.1.13**](../README.md)

***

[@fest-lib/core](../README.md) / ChannelHealthMonitor

# Class: ChannelHealthMonitor

Defined in: ChannelUtils.ts:139

Channel health monitoring

## Constructors

### Constructor

```ts
new ChannelHealthMonitor(): ChannelHealthMonitor;
```

#### Returns

`ChannelHealthMonitor`

## Methods

### getAllHealthStatuses()

```ts
getAllHealthStatuses(): Record<string, boolean>;
```

Defined in: ChannelUtils.ts:195

Get all health statuses

#### Returns

`Record`\<`string`, `boolean`\>

***

### isHealthy()

```ts
isHealthy(channelName): boolean;
```

Defined in: ChannelUtils.ts:188

Get health status of a channel

#### Parameters

##### channelName

`string`

#### Returns

`boolean`

***

### registerHealthCheck()

```ts
registerHealthCheck(
   channelName, 
   healthCheck, 
   intervalMs?): void;
```

Defined in: ChannelUtils.ts:147

Register a health check for a channel

#### Parameters

##### channelName

`string`

##### healthCheck

() => `Promise`\<`boolean`\>

##### intervalMs?

`number` = `30000`

#### Returns

`void`

***

### stopAllMonitoring()

```ts
stopAllMonitoring(): void;
```

Defined in: ChannelUtils.ts:220

Stop all monitoring

#### Returns

`void`

***

### stopMonitoring()

```ts
stopMonitoring(channelName): void;
```

Defined in: ChannelUtils.ts:206

Stop monitoring a channel

#### Parameters

##### channelName

`string`

#### Returns

`void`

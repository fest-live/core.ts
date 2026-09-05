[**@fest-lib/core v0.1.27**](../README.md)

***

[@fest-lib/core](../README.md) / MountedFsResponse

# Type Alias: MountedFsResponse

```ts
type MountedFsResponse = object;
```

Defined in: MountedFs.ts:45

## Properties

### entries?

```ts
optional entries?: MountedFsEntry[];
```

Defined in: MountedFs.ts:51

***

### error?

```ts
optional error?: string;
```

Defined in: MountedFs.ts:55

***

### file?

```ts
optional file?: MountedFsFileBody;
```

Defined in: MountedFs.ts:53

***

### id

```ts
id: string;
```

Defined in: MountedFs.ts:47

***

### mounts?

```ts
optional mounts?: object[];
```

Defined in: MountedFs.ts:52

#### virtual

```ts
virtual: string;
```

#### writable

```ts
writable: boolean;
```

***

### ok

```ts
ok: boolean;
```

Defined in: MountedFs.ts:48

***

### op?

```ts
optional op?: MountedFsOp;
```

Defined in: MountedFs.ts:49

***

### path?

```ts
optional path?: string;
```

Defined in: MountedFs.ts:50

***

### socketio?

```ts
optional socketio?: boolean;
```

Defined in: MountedFs.ts:58

***

### stat?

```ts
optional stat?: object;
```

Defined in: MountedFs.ts:54

#### isDirectory

```ts
isDirectory: boolean;
```

#### isFile

```ts
isFile: boolean;
```

#### size

```ts
size: number;
```

***

### t

```ts
t: "fs-result";
```

Defined in: MountedFs.ts:46

***

### ws?

```ts
optional ws?: boolean;
```

Defined in: MountedFs.ts:57

Host attached `/ssre/fs/ws`. Client must not dial WS unless this is true.

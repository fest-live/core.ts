# Core.TS

`@fest-lib/core` — level 0.5 fest-lib utilities. No fest peers. Used by every higher library.

Unwraps refs (`getValue`), type/empty checks, deferred promises, channels, mapped collections, user-scope paths, time/phone helpers, grid item math, WeakRef wrappers, and DOM constructor polyfills for worker/Node hosts.

## Install

```bash
npm install @fest-lib/core
```

```ts
import { getValue, isObject, createDeferred, debounce } from "@fest-lib/core";

const raw = getValue(maybeRef);
const { promise, resolve } = createDeferred<string>();
```

## Layout

| Path | Role |
| --- | --- |
| `src/utils/Primitive.ts` | `getValue`, refs, type guards |
| `src/utils/PromiseUtils.ts` | deferred, queue, timeout |
| `src/utils/Object.ts` / `Mapped.ts` | object + collection helpers |
| `src/utils/UserPath.ts` | user-scope path normalize |
| `src/utils/GridItemUtils.ts` | launcher grid item math |
| `src/runtime/dom-globals-polyfill.ts` | host polyfills |

Build: `npm run build`. Publish: `npm run publish` (`build:publish` + public npm).

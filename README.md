<p align="center">
  <strong>@fest-lib/core</strong><br>
  Level 0.5 — no fest peers. Everything else in the stack unwraps values through this package.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@fest-lib/core"><img src="https://img.shields.io/npm/v/@fest-lib/core?style=flat-square" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@fest-lib/core?style=flat-square" alt="MIT"></a>
  <a href="https://github.com/fest-live/core.ts"><img src="https://img.shields.io/github/stars/fest-live/core.ts?style=flat-square" alt="stars"></a>
</p>

`getValue` on refs, type / empty guards, deferred promises, channels, mapped collections, user-scope paths, time / phone helpers, launcher grid math, WeakRef wrappers, and DOM constructor polyfills so the same code runs in window, worker, and Node.

```text
fest/core          ← you are here
 └── dom · object · veela · uniform · lure · icon · image · fl-ui
```

## Install

```bash
npm install @fest-lib/core
```

ESM only. Node **20+**. No peer dependencies.

```ts
import { getValue, isObject, createDeferred, debounce } from "@fest-lib/core";

const raw = getValue(maybeRef);          // ref.value or the value itself
const { promise, resolve } = createDeferred<string>();
const onResize = debounce(() => measure(), 48);
```

## What you get

| Area | Typical exports | Source |
| --- | --- | --- |
| Refs & types | `getValue`, `isObject` | `src/utils/Primitive.ts` |
| Promises | `createDeferred`, queues, timeouts | `src/utils/PromiseUtils.ts` |
| Debounce | `debounce` | `src/utils/Misc.ts` |
| Collections | mapped helpers | `src/utils/Mapped.ts` |
| Paths | user-scope normalize | `src/utils/UserPath.ts` |
| Launcher grid | cell / layout math | `src/utils/GridItemUtils.ts` |
| Time / phone | format helpers | `src/utils/Time.ts`, `Phone.ts` |
| Host polyfills | `EventTarget` / DOM ctors in workers | `src/runtime/dom-globals-polyfill.ts` |

Importing the package installs the polyfills once. That is intentional.

## Workspace

```bash
cd modules/projects/core.ts
npm run dev          # Vite playground
npm run build        # dist + typedoc
npm run publish      # patch +1, then npm publish
```

Generated API: `npm run docs:md` → `./docs-md`. License: [MIT](LICENSE).

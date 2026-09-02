/**
 * FIND:promise-keyed
 * Await thenables, `$promise` slots, and same-shaped records/arrays via Promise combinators.
 */
import "./PromiseTry";
import { isPrimitive } from "./Primitive";

export type ResolvedMode = "all" | "settled";

const $promise = Symbol.for("@promise");
const SKIP_KEYS = new Set<PropertyKey>([
    Symbol.for("@extract"),
    Symbol.for("@origin"),
    Symbol.for("@registry"),
    Symbol.for("@value"),
    Symbol.for("@promise"),
    Symbol.for("@behavior"),
    Symbol.for("@trigger"),
    Symbol.for("@subscribe"),
    Symbol.for("@realProp"),
    Symbol.for("@trigger-lock"),
    Symbol.for("@trigger-less"),
    Symbol.for("@trigger-control"),
    Symbol.for("@isNotEqual"),
    Symbol.for("@fix"),
    Symbol.for("@target"),
    Symbol.for("@resolved"),
]);

const isThenable = (value: any) => value instanceof Promise || typeof value?.then == "function";

const settleOne = (value: any) => Promise.resolve(value).then(
    (v) => ({ status: "fulfilled" as const, value: v }),
    (reason) => ({ status: "rejected" as const, reason })
);

const ownEnumerableKeys = (obj: object) =>
    Reflect.ownKeys(obj).filter((key) => {
        if (SKIP_KEYS.has(key)) return false;
        const desc = Object.getOwnPropertyDescriptor(obj, key);
        return desc !== undefined && desc.enumerable;
    });

/** True when a value (or a nested enumerable field) still needs a Promise combinator. */
export const hasPendingPromises = (value: any, seen?: WeakSet<object>): boolean => {
    if (value == null || isPrimitive(value)) return false;
    if (isThenable(value) || isThenable(value?.[$promise])) return true;
    if (typeof value != "object" && typeof value != "function") return false;
    const seenSet = seen ?? new WeakSet<object>();
    if (seenSet.has(value)) return false;
    seenSet.add(value);
    if (Array.isArray(value)) return value.some((item) => hasPendingPromises(item, seenSet));
    if (value instanceof Map) return [...value.values()].some((item) => hasPendingPromises(item, seenSet));
    if (value instanceof Set) return [...value.values()].some((item) => hasPendingPromises(item, seenSet));
    return ownEnumerableKeys(value).some((key) => hasPendingPromises(value[key], seenSet));
};

function resolvedDeep(value: any, mode: ResolvedMode, seen: WeakSet<object>): any {
    if (value == null || isPrimitive(value) || typeof value == "symbol") return value;
    if (isThenable(value)) return value;

    const slot = value?.[$promise];
    if (isThenable(slot)) return slot;

    if (typeof value != "object" && typeof value != "function") return value;
    if (seen.has(value)) return value;
    seen.add(value);

    if (Array.isArray(value)) {
        const items = value.map((item) => resolvedDeep(item, mode, seen));
        return mode == "settled" ? Promise.allSettled(items) : Promise.all(items);
    }

    if (value instanceof Set) {
        const items = [...value.values()].map((item) => resolvedDeep(item, mode, seen));
        return mode == "settled" ? Promise.allSettled(items) : Promise.all(items);
    }

    const record: Record<PropertyKey, unknown> = {};
    if (value instanceof Map) {
        for (const [key, item] of value.entries()) record[key as PropertyKey] = resolvedDeep(item, mode, seen);
    } else {
        for (const key of ownEnumerableKeys(value)) record[key] = resolvedDeep(value[key], mode, seen);
    }

    return mode == "settled" ? Promise.allSettledKeyed(record) : Promise.allKeyed(record);
}

/**
 * Await a value with the matching Promise combinator (`all` / `allKeyed` / settled variants).
 * Nested records, arrays, maps, sets, and `@promise` slots are walked once.
 */
export function resolved<T = any>(value: T, mode: ResolvedMode = "all"): Promise<any> {
    if (isThenable(value)) return mode == "settled" ? settleOne(value) : Promise.resolve(value);
    const slot = (value as any)?.[$promise];
    if (isThenable(slot)) return mode == "settled" ? settleOne(slot) : Promise.resolve(slot);
    return Promise.resolve(resolvedDeep(value, mode, new WeakSet<object>()));
}

resolved.all = <T = any>(value: T) => resolved(value, "all");
resolved.allSettled = <T = any>(value: T) => resolved(value, "settled");
resolved.allKeyed = <T extends Record<string | symbol, unknown>>(value: T) => Promise.allKeyed(value);
resolved.allSettledKeyed = <T extends Record<string | symbol, unknown>>(value: T) => Promise.allSettledKeyed(value);
resolved.try = <T = any>(callbackOrValue: ((...args: any[]) => T) | T, ...args: any[]) =>
    Promise.try(callbackOrValue as any, ...args).then((value) => resolved(value, "all"));

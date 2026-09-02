/**
 * FIND:promise-keyed
 * COMPAT: Promise.try stays for older runtimes; allKeyed / allSettledKeyed until browsers ship them.
 */

declare global {
    interface PromiseConstructor {
        /**
         * Executes the provided callback and wraps its result in a resolved promise.
         * If the callback throws, the returned promise is rejected with that error.
         * When a non-function value is provided, it is wrapped in Promise.resolve.
         */
        try<T>(callback: (...args: any[]) => T | PromiseLike<T>, ...args: any[]): Promise<T>;
        try<T>(value: T): Promise<T>;

        allKeyed<D extends Record<string | symbol, unknown>>(
            promises: D
        ): Promise<{ [K in keyof D]: Awaited<D[K]> }>;

        allSettledKeyed<D extends Record<string | symbol, unknown>>(
            promises: D
        ): Promise<{ [K in keyof D]: PromiseSettledResult<Awaited<D[K]>> }>;
    }
}

if (typeof Promise !== "undefined" && typeof Promise.try !== "function") {
    Promise.try = function <T>(
        callbackOrValue: ((...args: any[]) => T | PromiseLike<T>) | T,
        ...args: any[]
    ): Promise<T> {
        try {
            if (typeof callbackOrValue === "function") {
                return Promise.resolve((callbackOrValue as (...args: any[]) => T)(...args));
            }
            return Promise.resolve(callbackOrValue as T);
        } catch (error) {
            return Promise.reject(error);
        }
    };
}

function ownEnumerableKeys(obj: object): (string | symbol)[] {
    return Reflect.ownKeys(obj).filter((key) => {
        const desc = Object.getOwnPropertyDescriptor(obj, key);
        return desc !== undefined && desc.enumerable;
    });
}

function makeKeyed(name: "allKeyed" | "allSettledKeyed", settled: boolean) {
    return function <D extends Record<string | symbol, unknown>>(this: PromiseConstructor, promises: D) {
        const C = this;
        if (typeof C !== "function") {
            throw new TypeError(`Promise.${name} called on non-constructor`);
        }

        return new C((resolve, reject) => {
            if (promises === null || (typeof promises !== "object" && typeof promises !== "function")) {
                throw new TypeError(`Promise.${name} expects an object, got ${String(promises)}`);
            }

            const keys = ownEnumerableKeys(promises);
            const result: Record<string | symbol, unknown> = {};
            let remaining = keys.length;

            if (remaining === 0) {
                resolve(result as { [K in keyof D]: Awaited<D[K]> });
                return;
            }

            // WHY: pre-create keys so result order matches the input object
            for (const key of keys) result[key] = undefined;

            for (const key of keys) {
                C.resolve((promises as Record<PropertyKey, unknown>)[key]).then(
                    (value) => {
                        result[key] = settled ? { status: "fulfilled", value } : value;
                        if (--remaining === 0) resolve(result as { [K in keyof D]: Awaited<D[K]> });
                    },
                    (reason) => {
                        if (settled) {
                            result[key] = { status: "rejected", reason };
                            if (--remaining === 0) resolve(result as { [K in keyof D]: Awaited<D[K]> });
                        } else {
                            reject(reason);
                        }
                    }
                );
            }
        });
    };
}

function definePromiseMethod(name: "allKeyed" | "allSettledKeyed", fn: Function) {
    if (typeof Promise[name] !== "function") {
        Object.defineProperty(Promise, name, {
            value: fn,
            writable: true,
            configurable: true,
            enumerable: false,
        });
    }
}

definePromiseMethod("allKeyed", makeKeyed("allKeyed", false));
definePromiseMethod("allSettledKeyed", makeKeyed("allSettledKeyed", true));

export {};

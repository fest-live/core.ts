declare global {
    interface PromiseConstructor {
        /**
         * Executes the provided callback and wraps its result in a resolved promise.
         * If the callback throws, the returned promise is rejected with that error.
         * When a non-function value is provided, it is wrapped in Promise.resolve.
         */
        try<T>(callback: (...args: any[]) => T | PromiseLike<T>, ...args: any[]): Promise<T>;
        try<T>(value: T): Promise<T>;
    }
}

// Ensure the polyfill is applied exactly once in any environment.
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

export {};


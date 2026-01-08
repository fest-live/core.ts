/**
 * Promise utilities for advanced async operations
 */

/**
 * Create a promised value that resolves when set
 */
export function createDeferred<T = any>(): {
    promise: Promise<T>;
    resolve: (value: T) => void;
    reject: (error: any) => void;
    isResolved: boolean;
    isRejected: boolean;
} {
    let resolve: (value: T) => void;
    let reject: (error: any) => void;
    let isResolved = false;
    let isRejected = false;

    const promise = new Promise<T>((res, rej) => {
        resolve = (value) => {
            if (!isResolved && !isRejected) {
                isResolved = true;
                res(value);
            }
        };
        reject = (error) => {
            if (!isResolved && !isRejected) {
                isRejected = true;
                rej(error);
            }
        };
    });

    return {
        promise,
        resolve: resolve!,
        reject: reject!,
        get isResolved() { return isResolved; },
        get isRejected() { return isRejected; }
    };
}

/**
 * Queue async operations and process them sequentially
 */
export class AsyncQueue {
    private queue: Array<() => Promise<any>> = [];
    private processing = false;

    async add<T>(operation: () => Promise<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            this.queue.push(async () => {
                try {
                    const result = await operation();
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });

            this.process();
        });
    }

    private async process(): Promise<void> {
        if (this.processing || this.queue.length === 0) return;

        this.processing = true;

        while (this.queue.length > 0) {
            const operation = this.queue.shift()!;
            await operation();
        }

        this.processing = false;
    }

    get length(): number {
        return this.queue.length;
    }

    get isProcessing(): boolean {
        return this.processing;
    }
}

/**
 * Create a timeout promise that rejects after specified time
 */
export function withTimeout<T>(promise: Promise<T>, timeoutMs: number, timeoutMessage = 'Operation timed out'): Promise<T> {
    const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
    });

    return Promise.race([promise, timeoutPromise]);
}

/**
 * Retry an async operation with exponential backoff
 */
export async function retry<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    initialDelay: number = 1000,
    backoffMultiplier: number = 2
): Promise<T> {
    let lastError: Error;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error as Error;

            if (attempt < maxRetries) {
                const delay = initialDelay * Math.pow(backoffMultiplier, attempt);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    throw lastError!;
}

/**
 * Execute operations concurrently with a limit
 */
export async function concurrentLimit<T>(
    operations: Array<() => Promise<T>>,
    limit: number
): Promise<T[]> {
    const results: T[] = [];
    const executing: Promise<void>[] = [];

    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];
        const promise = Promise.resolve().then(async () => {
            try {
                const result = await operation();
                results[i] = result;
            } catch (error) {
                throw error;
            }
        });

        results[i] = undefined as any; // Placeholder
        executing.push(promise);

        if (executing.length >= limit) {
            await Promise.race(executing);
            executing.splice(executing.findIndex(p => p === promise), 1);
        }
    }

    await Promise.all(executing);
    return results;
}
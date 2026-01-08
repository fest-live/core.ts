/**
 * Channel utilities for managing communication channels
 */

/**
 * Channel registry for managing multiple channels
 */
export class ChannelRegistry {
    private channels = new Map<string, any>();
    private listeners = new Map<string, Set<Function>>();

    /**
     * Register a channel
     */
    register<T>(name: string, channel: T): T {
        this.channels.set(name, channel);

        // Notify listeners
        const listeners = this.listeners.get(name);
        if (listeners) {
            for (const listener of listeners) {
                try {
                    listener(channel);
                } catch (error) {
                    console.error(`[ChannelRegistry] Listener error for ${name}:`, error);
                }
            }
        }

        return channel;
    }

    /**
     * Get a registered channel
     */
    get<T>(name: string): T | undefined {
        return this.channels.get(name);
    }

    /**
     * Check if a channel is registered
     */
    has(name: string): boolean {
        return this.channels.has(name);
    }

    /**
     * Unregister a channel
     */
    unregister(name: string): boolean {
        const existed = this.channels.delete(name);
        if (existed) {
            // Notify listeners that channel was removed
            const listeners = this.listeners.get(name);
            if (listeners) {
                for (const listener of listeners) {
                    try {
                        listener(null);
                    } catch (error) {
                        console.error(`[ChannelRegistry] Unregister listener error for ${name}:`, error);
                    }
                }
            }
        }
        return existed;
    }

    /**
     * Listen for channel registration/unregistration
     */
    onChannelChange(name: string, listener: (channel: any) => void): () => void {
        if (!this.listeners.has(name)) {
            this.listeners.set(name, new Set());
        }

        const listeners = this.listeners.get(name)!;
        listeners.add(listener);

        // If channel already exists, notify immediately
        if (this.channels.has(name)) {
            try {
                listener(this.channels.get(name));
            } catch (error) {
                console.error(`[ChannelRegistry] Initial listener error for ${name}:`, error);
            }
        }

        // Return unsubscribe function
        return () => {
            listeners.delete(listener);
            if (listeners.size === 0) {
                this.listeners.delete(name);
            }
        };
    }

    /**
     * Get all registered channel names
     */
    getChannelNames(): string[] {
        return Array.from(this.channels.keys());
    }

    /**
     * Clear all channels and listeners
     */
    clear(): void {
        this.channels.clear();
        this.listeners.clear();
    }
}

/**
 * Singleton channel registry instance
 */
export const globalChannelRegistry = new ChannelRegistry();

/**
 * Create a typed channel proxy
 */
export function createChannelProxy<T extends Record<string, any>>(
    channel: any,
    methods: (keyof T)[]
): T {
    const proxy = {} as T;

    for (const method of methods) {
        (proxy as any)[method] = (...args: any[]) => {
            return channel.request(method as string, args);
        };
    }

    return proxy;
}

/**
 * Channel health monitoring
 */
export class ChannelHealthMonitor {
    private healthChecks = new Map<string, () => Promise<boolean>>();
    private intervals = new Map<string, number>();
    private healthStatus = new Map<string, boolean>();

    /**
     * Register a health check for a channel
     */
    registerHealthCheck(
        channelName: string,
        healthCheck: () => Promise<boolean>,
        intervalMs: number = 30000
    ): void {
        this.healthChecks.set(channelName, healthCheck);

        // Clear existing interval
        const existingInterval = this.intervals.get(channelName);
        if (existingInterval) {
            clearInterval(existingInterval);
        }

        // Start health monitoring
        const interval = setInterval(async () => {
            try {
                const isHealthy = await healthCheck();
                this.healthStatus.set(channelName, isHealthy);

                if (!isHealthy) {
                    console.warn(`[ChannelHealth] Channel '${channelName}' is unhealthy`);
                }
            } catch (error) {
                console.error(`[ChannelHealth] Health check failed for '${channelName}':`, error);
                this.healthStatus.set(channelName, false);
            }
        }, intervalMs);

        this.intervals.set(channelName, interval);

        // Initial check
        healthCheck().then(isHealthy => {
            this.healthStatus.set(channelName, isHealthy);
        }).catch(() => {
            this.healthStatus.set(channelName, false);
        });
    }

    /**
     * Get health status of a channel
     */
    isHealthy(channelName: string): boolean {
        return this.healthStatus.get(channelName) ?? false;
    }

    /**
     * Get all health statuses
     */
    getAllHealthStatuses(): Record<string, boolean> {
        const result: Record<string, boolean> = {};
        for (const [name, status] of this.healthStatus) {
            result[name] = status;
        }
        return result;
    }

    /**
     * Stop monitoring a channel
     */
    stopMonitoring(channelName: string): void {
        const interval = this.intervals.get(channelName);
        if (interval) {
            clearInterval(interval);
            this.intervals.delete(channelName);
        }

        this.healthChecks.delete(channelName);
        this.healthStatus.delete(channelName);
    }

    /**
     * Stop all monitoring
     */
    stopAllMonitoring(): void {
        for (const interval of this.intervals.values()) {
            clearInterval(interval);
        }

        this.intervals.clear();
        this.healthChecks.clear();
        this.healthStatus.clear();
    }
}

/**
 * Singleton health monitor instance
 */
export const globalChannelHealthMonitor = new ChannelHealthMonitor();
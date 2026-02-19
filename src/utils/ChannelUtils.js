/**
 * Channel utilities for managing communication channels
 */
/**
 * Channel registry for managing multiple channels
 */
export class ChannelRegistry {
    channels = new Map();
    listeners = new Map();
    /**
     * Register a channel
     */
    register(name, channel) {
        this.channels.set(name, channel);
        // Notify listeners
        const listeners = this.listeners.get(name);
        if (listeners) {
            for (const listener of listeners) {
                try {
                    listener(channel);
                }
                catch (error) {
                    console.error(`[ChannelRegistry] Listener error for ${name}:`, error);
                }
            }
        }
        return channel;
    }
    /**
     * Get a registered channel
     */
    get(name) {
        return this.channels.get(name);
    }
    /**
     * Check if a channel is registered
     */
    has(name) {
        return this.channels.has(name);
    }
    /**
     * Unregister a channel
     */
    unregister(name) {
        const existed = this.channels.delete(name);
        if (existed) {
            // Notify listeners that channel was removed
            const listeners = this.listeners.get(name);
            if (listeners) {
                for (const listener of listeners) {
                    try {
                        listener(null);
                    }
                    catch (error) {
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
    onChannelChange(name, listener) {
        if (!this.listeners.has(name)) {
            this.listeners.set(name, new Set());
        }
        const listeners = this.listeners.get(name);
        listeners.add(listener);
        // If channel already exists, notify immediately
        if (this.channels.has(name)) {
            try {
                listener(this.channels.get(name));
            }
            catch (error) {
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
    getChannelNames() {
        return Array.from(this.channels.keys());
    }
    /**
     * Clear all channels and listeners
     */
    clear() {
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
export function createChannelProxy(channel, methods) {
    const proxy = {};
    for (const method of methods) {
        proxy[method] = (...args) => {
            return channel.request(method, args);
        };
    }
    return proxy;
}
/**
 * Channel health monitoring
 */
export class ChannelHealthMonitor {
    healthChecks = new Map();
    intervals = new Map();
    healthStatus = new Map();
    /**
     * Register a health check for a channel
     */
    registerHealthCheck(channelName, healthCheck, intervalMs = 30000) {
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
            }
            catch (error) {
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
    isHealthy(channelName) {
        return this.healthStatus.get(channelName) ?? false;
    }
    /**
     * Get all health statuses
     */
    getAllHealthStatuses() {
        const result = {};
        for (const [name, status] of this.healthStatus) {
            result[name] = status;
        }
        return result;
    }
    /**
     * Stop monitoring a channel
     */
    stopMonitoring(channelName) {
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
    stopAllMonitoring() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhbm5lbFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUg7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZUFBZTtJQUNoQixRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztJQUNsQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7SUFFckQ7O09BRUc7SUFDSCxRQUFRLENBQUksSUFBWSxFQUFFLE9BQVU7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWpDLG1CQUFtQjtRQUNuQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDO29CQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztnQkFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO29CQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLElBQUksR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMxRSxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxHQUFHLENBQUksSUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLElBQVk7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILFVBQVUsQ0FB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TSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQjtRQUNiLEtBQUssTUFBTSxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQzdDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoYW5uZWwgdXRpbGl0aWVzIGZvciBtYW5hZ2luZyBjb21tdW5pY2F0aW9uIGNoYW5uZWxzXG4gKi9cblxuLyoqXG4gKiBDaGFubmVsIHJlZ2lzdHJ5IGZvciBtYW5hZ2luZyBtdWx0aXBsZSBjaGFubmVsc1xuICovXG5leHBvcnQgY2xhc3MgQ2hhbm5lbFJlZ2lzdHJ5IHtcbiAgICBwcml2YXRlIGNoYW5uZWxzID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgICBwcml2YXRlIGxpc3RlbmVycyA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8RnVuY3Rpb24+PigpO1xuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYSBjaGFubmVsXG4gICAgICovXG4gICAgcmVnaXN0ZXI8VD4obmFtZTogc3RyaW5nLCBjaGFubmVsOiBUKTogVCB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMuc2V0KG5hbWUsIGNoYW5uZWwpO1xuXG4gICAgICAgIC8vIE5vdGlmeSBsaXN0ZW5lcnNcbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKGNoYW5uZWwpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtDaGFubmVsUmVnaXN0cnldIExpc3RlbmVyIGVycm9yIGZvciAke25hbWV9OmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hhbm5lbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSByZWdpc3RlcmVkIGNoYW5uZWxcbiAgICAgKi9cbiAgICBnZXQ8VD4obmFtZTogc3RyaW5nKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIGNoYW5uZWwgaXMgcmVnaXN0ZXJlZFxuICAgICAqL1xuICAgIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuaGFzKG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXIgYSBjaGFubmVsXG4gICAgICovXG4gICAgdW5yZWdpc3RlcihuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZXhpc3RlZCA9IHRoaXMuY2hhbm5lbHMuZGVsZXRlKG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RlZCkge1xuICAgICAgICAgICAgLy8gTm90aWZ5IGxpc3RlbmVycyB0aGF0IGNoYW5uZWwgd2FzIHJlbW92ZWRcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzLmdldChuYW1lKTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbQ2hhbm5lbFJlZ2lzdHJ5XSBVbnJlZ2lzdGVyIGxpc3RlbmVyIGVycm9yIGZvciAke25hbWV9OmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIGNoYW5uZWwgcmVnaXN0cmF0aW9uL3VucmVnaXN0cmF0aW9uXG4gICAgICovXG4gICAgb25DaGFubmVsQ2hhbmdlKG5hbWU6IHN0cmluZywgbGlzdGVuZXI6IChjaGFubmVsOiBhbnkpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChuYW1lLCBuZXcgU2V0KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KG5hbWUpITtcbiAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG5cbiAgICAgICAgLy8gSWYgY2hhbm5lbCBhbHJlYWR5IGV4aXN0cywgbm90aWZ5IGltbWVkaWF0ZWx5XG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcih0aGlzLmNoYW5uZWxzLmdldChuYW1lKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtDaGFubmVsUmVnaXN0cnldIEluaXRpYWwgbGlzdGVuZXIgZXJyb3IgZm9yICR7bmFtZX06YCwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHJlZ2lzdGVyZWQgY2hhbm5lbCBuYW1lc1xuICAgICAqL1xuICAgIGdldENoYW5uZWxOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY2hhbm5lbHMua2V5cygpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY2hhbm5lbHMgYW5kIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5uZWxzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFNpbmdsZXRvbiBjaGFubmVsIHJlZ2lzdHJ5IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjb25zdCBnbG9iYWxDaGFubmVsUmVnaXN0cnkgPSBuZXcgQ2hhbm5lbFJlZ2lzdHJ5KCk7XG5cbi8qKlxuICogQ3JlYXRlIGEgdHlwZWQgY2hhbm5lbCBwcm94eVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbFByb3h5PFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihcbiAgICBjaGFubmVsOiBhbnksXG4gICAgbWV0aG9kczogKGtleW9mIFQpW11cbik6IFQge1xuICAgIGNvbnN0IHByb3h5ID0ge30gYXMgVDtcblxuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcbiAgICAgICAgKHByb3h5IGFzIGFueSlbbWV0aG9kXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWwucmVxdWVzdChtZXRob2QgYXMgc3RyaW5nLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJveHk7XG59XG5cbi8qKlxuICogQ2hhbm5lbCBoZWFsdGggbW9uaXRvcmluZ1xuICovXG5leHBvcnQgY2xhc3MgQ2hhbm5lbEhlYWx0aE1vbml0b3Ige1xuICAgIHByaXZhdGUgaGVhbHRoQ2hlY2tzID0gbmV3IE1hcDxzdHJpbmcsICgpID0+IFByb21pc2U8Ym9vbGVhbj4+KCk7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbHMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuICAgIHByaXZhdGUgaGVhbHRoU3RhdHVzID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGhlYWx0aCBjaGVjayBmb3IgYSBjaGFubmVsXG4gICAgICovXG4gICAgcmVnaXN0ZXJIZWFsdGhDaGVjayhcbiAgICAgICAgY2hhbm5lbE5hbWU6IHN0cmluZyxcbiAgICAgICAgaGVhbHRoQ2hlY2s6ICgpID0+IFByb21pc2U8Ym9vbGVhbj4sXG4gICAgICAgIGludGVydmFsTXM6IG51bWJlciA9IDMwMDAwXG4gICAgKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGVhbHRoQ2hlY2tzLnNldChjaGFubmVsTmFtZSwgaGVhbHRoQ2hlY2spO1xuXG4gICAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGludGVydmFsXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSW50ZXJ2YWwgPSB0aGlzLmludGVydmFscy5nZXQoY2hhbm5lbE5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdJbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChleGlzdGluZ0ludGVydmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0YXJ0IGhlYWx0aCBtb25pdG9yaW5nXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0hlYWx0aHkgPSBhd2FpdCBoZWFsdGhDaGVjaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNIZWFsdGh5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW0NoYW5uZWxIZWFsdGhdIENoYW5uZWwgJyR7Y2hhbm5lbE5hbWV9JyBpcyB1bmhlYWx0aHlgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtDaGFubmVsSGVhbHRoXSBIZWFsdGggY2hlY2sgZmFpbGVkIGZvciAnJHtjaGFubmVsTmFtZX0nOmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aFN0YXR1cy5zZXQoY2hhbm5lbE5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaW50ZXJ2YWxNcyk7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbHMuc2V0KGNoYW5uZWxOYW1lLCBpbnRlcnZhbCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbCBjaGVja1xuICAgICAgICBoZWFsdGhDaGVjaygpLnRoZW4oaXNIZWFsdGh5ID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoU3RhdHVzLnNldChjaGFubmVsTmFtZSwgaXNIZWFsdGh5KTtcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGhTdGF0dXMuc2V0KGNoYW5uZWxOYW1lLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBoZWFsdGggc3RhdHVzIG9mIGEgY2hhbm5lbFxuICAgICAqL1xuICAgIGlzSGVhbHRoeShjaGFubmVsTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aFN0YXR1cy5nZXQoY2hhbm5lbE5hbWUpID8/IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgaGVhbHRoIHN0YXR1c2VzXG4gICAgICovXG4gICAgZ2V0QWxsSGVhbHRoU3RhdHVzZXMoKTogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGJvb2xlYW4+ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW25hbWUsIHN0YXR1c10gb2YgdGhpcy5oZWFsdGhTdGF0dXMpIHtcbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHN0YXR1cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgbW9uaXRvcmluZyBhIGNoYW5uZWxcbiAgICAgKi9cbiAgICBzdG9wTW9uaXRvcmluZyhjaGFubmVsTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbHMuZ2V0KGNoYW5uZWxOYW1lKTtcbiAgICAgICAgaWYgKGludGVydmFsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxzLmRlbGV0ZShjaGFubmVsTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhlYWx0aENoZWNrcy5kZWxldGUoY2hhbm5lbE5hbWUpO1xuICAgICAgICB0aGlzLmhlYWx0aFN0YXR1cy5kZWxldGUoY2hhbm5lbE5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgYWxsIG1vbml0b3JpbmdcbiAgICAgKi9cbiAgICBzdG9wQWxsTW9uaXRvcmluZygpOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCBpbnRlcnZhbCBvZiB0aGlzLmludGVydmFscy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmludGVydmFscy5jbGVhcigpO1xuICAgICAgICB0aGlzLmhlYWx0aENoZWNrcy5jbGVhcigpO1xuICAgICAgICB0aGlzLmhlYWx0aFN0YXR1cy5jbGVhcigpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBTaW5nbGV0b24gaGVhbHRoIG1vbml0b3IgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGdsb2JhbENoYW5uZWxIZWFsdGhNb25pdG9yID0gbmV3IENoYW5uZWxIZWFsdGhNb25pdG9yKCk7Il19
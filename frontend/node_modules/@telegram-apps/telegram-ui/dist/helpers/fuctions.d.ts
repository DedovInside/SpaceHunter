export declare function isFunction(value: unknown): value is Function;
export declare function throttle<T extends any[]>(fn: (...args: T) => unknown, threshold?: number, scope?: (Window & typeof globalThis) | undefined): {
    (...args: T): void;
    cancel(): void;
};
export declare function debounce<T extends any[]>(fn: (...args: T) => unknown, delay: number, context?: (Window & typeof globalThis) | undefined): {
    (...a: T): void;
    cancel(): void;
};
//# sourceMappingURL=fuctions.d.ts.map
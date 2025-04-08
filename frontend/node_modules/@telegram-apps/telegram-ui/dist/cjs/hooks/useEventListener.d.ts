interface EventListenerHandle {
    add: (el: HTMLElement | Document | Window) => void;
    remove: () => void;
}
export declare function useEventListener<K extends keyof GlobalEventHandlersEventMap>(event: K, _cb: false | null | undefined | ((ev: GlobalEventHandlersEventMap[K]) => void), _options?: AddEventListenerOptions): EventListenerHandle;
export declare function useEventListener<E extends Event>(event: string, _cb: false | null | undefined | ((ev: E) => void), _options?: AddEventListenerOptions): EventListenerHandle;
export {};
//# sourceMappingURL=useEventListener.d.ts.map
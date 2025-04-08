/* eslint-disable @typescript-eslint/no-explicit-any */ import { canUseDOM } from "./dom";
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value) {
    return typeof value === 'function';
}
export function throttle(fn, threshold = 50, scope = canUseDOM ? window : undefined) {
    let prevDate = Date.now() - threshold;
    let timeoutId;
    const throttledFn = (...args)=>{
        const timeLeft = prevDate + threshold - Date.now();
        clearTimeout(timeoutId);
        if (timeLeft > 0) {
            timeoutId = setTimeout(()=>{
                prevDate = Date.now();
                fn.apply(scope, args);
            }, timeLeft);
            return;
        }
        prevDate = Date.now();
        fn.apply(scope, args);
    };
    throttledFn.cancel = ()=>{
        clearTimeout(timeoutId);
    };
    return throttledFn;
}
export function debounce(fn, delay, context = canUseDOM ? window : undefined) {
    let timeoutId;
    let args;
    const later = ()=>fn.apply(context, args);
    const debouncedFn = (...a)=>{
        args = a;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, delay);
    };
    debouncedFn.cancel = ()=>{
        clearTimeout(timeoutId);
    };
    return debouncedFn;
}

//# sourceMappingURL=fuctions.js.map
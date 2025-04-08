/* eslint-disable @typescript-eslint/no-explicit-any */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    debounce: function() {
        return debounce;
    },
    isFunction: function() {
        return isFunction;
    },
    throttle: function() {
        return throttle;
    }
});
const _dom = require("./dom");
function isFunction(value) {
    return typeof value === 'function';
}
function throttle(fn, threshold = 50, scope = _dom.canUseDOM ? window : undefined) {
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
function debounce(fn, delay, context = _dom.canUseDOM ? window : undefined) {
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
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useTimeout", {
    enumerable: true,
    get: function() {
        return useTimeout;
    }
});
const _react = require("react");
const _useEnhancedEffect = require("./useEnhancedEffect");
const useTimeout = (callbackFunction, duration)=>{
    const options = (0, _react.useRef)({
        callbackFunction,
        duration
    });
    (0, _useEnhancedEffect.useEnhancedEffect)(()=>{
        options.current.callbackFunction = callbackFunction;
        options.current.duration = duration;
    }, [
        callbackFunction,
        duration
    ]);
    const timeout = (0, _react.useRef)();
    const clear = (0, _react.useCallback)(()=>clearTimeout(timeout === null || timeout === void 0 ? void 0 : timeout.current), []);
    const set = (0, _react.useCallback)(()=>{
        clear();
        timeout.current = setTimeout(options.current.callbackFunction, options.current.duration);
    }, [
        clear
    ]);
    return {
        set,
        clear
    };
};

//# sourceMappingURL=useTimeout.js.map
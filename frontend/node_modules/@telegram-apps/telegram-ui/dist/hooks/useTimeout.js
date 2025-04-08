'use client';
import { useCallback, useRef } from "react";
import { useEnhancedEffect } from "./useEnhancedEffect";
export const useTimeout = (callbackFunction, duration)=>{
    const options = useRef({
        callbackFunction,
        duration
    });
    useEnhancedEffect(()=>{
        options.current.callbackFunction = callbackFunction;
        options.current.duration = duration;
    }, [
        callbackFunction,
        duration
    ]);
    const timeout = useRef();
    const clear = useCallback(()=>clearTimeout(timeout === null || timeout === void 0 ? void 0 : timeout.current), []);
    const set = useCallback(()=>{
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
'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { canUseDOM } from "../helpers/dom";
import { useEnhancedEffect } from "./useEnhancedEffect";
/**
 * Custom React hook for handling event listeners in a declarative way.
 * Copied from https://github.com/VKCOM/VKUI/blob/master/packages/vkui/src/hooks/useEventListener.ts
 * */ export function useEventListener(event, _cb, _options) {
    const cbRef = useRef(_cb);
    useEnhancedEffect(()=>{
        cbRef.current = _cb;
    }, [
        _cb
    ]);
    // Callback function to be executed when the event occurs
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ const cb = useCallback((e)=>cbRef.current && cbRef.current(e), []);
    // Refs to store the detach and remove functions
    const detach = useRef(()=>{});
    const remove = useCallback(()=>{
        detach.current();
        detach.current = ()=>{};
    }, []);
    const add = useCallback((el)=>{
        if (!canUseDOM) {
            return;
        }
        remove();
        if (!el) {
            return;
        }
        const options = _object_spread({}, _options);
        el.addEventListener(event, cb, options);
        detach.current = ()=>el.removeEventListener(event, cb, options);
    }, [
        _options,
        cb,
        event,
        remove
    ]);
    useEffect(()=>remove, [
        remove
    ]);
    return useMemo(()=>({
            add,
            remove
        }), [
        add,
        remove
    ]);
}

//# sourceMappingURL=useEventListener.js.map
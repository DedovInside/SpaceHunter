'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useEventListener", {
    enumerable: true,
    get: function() {
        return useEventListener;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _react = require("react");
const _dom = require("../helpers/dom");
const _useEnhancedEffect = require("./useEnhancedEffect");
function useEventListener(event, _cb, _options) {
    const cbRef = (0, _react.useRef)(_cb);
    (0, _useEnhancedEffect.useEnhancedEffect)(()=>{
        cbRef.current = _cb;
    }, [
        _cb
    ]);
    // Callback function to be executed when the event occurs
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ const cb = (0, _react.useCallback)((e)=>cbRef.current && cbRef.current(e), []);
    // Refs to store the detach and remove functions
    const detach = (0, _react.useRef)(()=>{});
    const remove = (0, _react.useCallback)(()=>{
        detach.current();
        detach.current = ()=>{};
    }, []);
    const add = (0, _react.useCallback)((el)=>{
        if (!_dom.canUseDOM) {
            return;
        }
        remove();
        if (!el) {
            return;
        }
        const options = _object_spread._({}, _options);
        el.addEventListener(event, cb, options);
        detach.current = ()=>el.removeEventListener(event, cb, options);
    }, [
        _options,
        cb,
        event,
        remove
    ]);
    (0, _react.useEffect)(()=>remove, [
        remove
    ]);
    return (0, _react.useMemo)(()=>({
            add,
            remove
        }), [
        add,
        remove
    ]);
}

//# sourceMappingURL=useEventListener.js.map
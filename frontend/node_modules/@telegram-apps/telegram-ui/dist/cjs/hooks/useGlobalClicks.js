"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useGlobalClicks", {
    enumerable: true,
    get: function() {
        return useGlobalClicks;
    }
});
const _useEnhancedEffect = require("./useEnhancedEffect");
const _dom = require("@floating-ui/utils/dom");
const useGlobalClicks = (callback, ...refs)=>{
    (0, _useEnhancedEffect.useEnhancedEffect)(()=>{
        const hasNotNullRefs = refs.some((ref)=>ref && ref.current !== null);
        if (!document || !hasNotNullRefs) {
            return ()=>{};
        }
        const handleClick = (event)=>{
            const targetEl = event.target;
            const isClickInsideGivenRefs = (0, _dom.isElement)(targetEl) && refs.some((ref)=>ref && ref.current && ref.current.contains(targetEl));
            !isClickInsideGivenRefs && callback(event);
        };
        document.addEventListener('click', handleClick, {
            passive: true,
            capture: true
        });
        return ()=>document.removeEventListener('click', handleClick, true);
    }, [
        document,
        callback,
        ...refs
    ]);
};

//# sourceMappingURL=useGlobalClicks.js.map
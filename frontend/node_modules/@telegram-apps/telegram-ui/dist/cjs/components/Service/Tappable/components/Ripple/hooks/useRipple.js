'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRipple", {
    enumerable: true,
    get: function() {
        return useRipple;
    }
});
const _react = require("react");
const _useTimeout = require("../../../../../../hooks/useTimeout");
const RIPPLE_DELAY = 70;
const WAVE_LIVE = 225;
const useRipple = ()=>{
    const [clicks, setClicks] = (0, _react.useState)([]);
    const pointerDelayTimers = (0, _react.useMemo)(()=>new Map(), []);
    const clearClicks = (0, _useTimeout.useTimeout)(()=>setClicks([]), WAVE_LIVE);
    function addClick(x, y, pointerId) {
        const dateNow = Date.now();
        const filteredClicks = clicks.filter((click)=>click.date + WAVE_LIVE > dateNow);
        setClicks([
            ...filteredClicks,
            {
                x,
                y,
                date: dateNow,
                pointerId
            }
        ]);
        clearClicks.set();
        pointerDelayTimers.delete(pointerId);
    }
    const onPointerDown = (e)=>{
        const { top, left } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - (left !== null && left !== void 0 ? left : 0);
        const y = e.clientY - (top !== null && top !== void 0 ? top : 0);
        pointerDelayTimers.set(e.pointerId, setTimeout(()=>addClick(x, y, e.pointerId), RIPPLE_DELAY));
    };
    const onPointerCancel = (e)=>{
        const timer = pointerDelayTimers.get(e.pointerId);
        clearTimeout(timer);
        pointerDelayTimers.delete(e.pointerId);
    };
    return {
        clicks,
        onPointerDown,
        onPointerCancel
    };
};

//# sourceMappingURL=useRipple.js.map
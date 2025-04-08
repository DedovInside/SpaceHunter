'use client';
import { useMemo, useState } from "react";
import { useTimeout } from "../../../../../../hooks/useTimeout";
const RIPPLE_DELAY = 70;
const WAVE_LIVE = 225;
export const useRipple = ()=>{
    const [clicks, setClicks] = useState([]);
    const pointerDelayTimers = useMemo(()=>new Map(), []);
    const clearClicks = useTimeout(()=>setClicks([]), WAVE_LIVE);
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
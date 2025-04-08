import { canUseDOM } from "../../../../helpers/dom";
export const initGesture = (startX, startY)=>({
        startX,
        startY,
        startT: new Date(),
        duration: 0,
        isPressed: true,
        isY: false,
        isX: false,
        isSlideX: false,
        isSlideY: false,
        isSlide: false,
        clientX: 0,
        clientY: 0,
        shiftX: 0,
        shiftY: 0,
        shiftXAbs: 0,
        shiftYAbs: 0
    });
/* Gets the X-axis coordinate from a touch or mouse event */ export const coordX = (e)=>{
    if (e.clientX != null) {
        return e.clientX;
    }
    return e.changedTouches && e.changedTouches[0].clientX;
};
/* Gets the Y-axis coordinate from a touch or mouse event */ export const coordY = (e)=>{
    if (e.clientY != null) {
        return e.clientY;
    }
    return e.changedTouches && e.changedTouches[0].clientY;
};
export const touchEnabled = ()=>canUseDOM && 'ontouchstart' in window;
/*
 * Returns an array of supported events
 * If the browser supports pointer events or handjs is included, it returns pointer events.
 * Otherwise, it uses mouse events
 */ export const getSupportedEvents = ()=>{
    if (touchEnabled()) {
        return [
            'touchstart',
            'touchmove',
            'touchend',
            'touchcancel'
        ];
    }
    return [
        'mousedown',
        'mousemove',
        'mouseup',
        'mouseleave'
    ];
};

//# sourceMappingURL=touch.js.map
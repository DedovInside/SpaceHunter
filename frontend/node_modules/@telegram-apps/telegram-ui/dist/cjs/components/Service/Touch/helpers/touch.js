"use strict";
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
    coordX: function() {
        return coordX;
    },
    coordY: function() {
        return coordY;
    },
    getSupportedEvents: function() {
        return getSupportedEvents;
    },
    initGesture: function() {
        return initGesture;
    },
    touchEnabled: function() {
        return touchEnabled;
    }
});
const _dom = require("../../../../helpers/dom");
const initGesture = (startX, startY)=>({
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
const coordX = (e)=>{
    if (e.clientX != null) {
        return e.clientX;
    }
    return e.changedTouches && e.changedTouches[0].clientX;
};
const coordY = (e)=>{
    if (e.clientY != null) {
        return e.clientY;
    }
    return e.changedTouches && e.changedTouches[0].clientY;
};
const touchEnabled = ()=>_dom.canUseDOM && 'ontouchstart' in window;
const getSupportedEvents = ()=>{
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
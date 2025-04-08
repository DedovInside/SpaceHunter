/* eslint-disable @typescript-eslint/no-use-before-define */ 'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Touch", {
    enumerable: true,
    get: function() {
        return Touch;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _useEnhancedEffect = require("../../../hooks/useEnhancedEffect");
const _useEventListener = require("../../../hooks/useEventListener");
const _touch = require("./helpers/touch");
const Touch = (_param)=>{
    var { Component = 'div', onStart, onStartX, onStartY, onMove: _onMove, onMoveX, onMoveY, onLeave, onEnter, onEnd: _onEnd, onEndX, onEndY, onClickCapture, usePointerHover, slideThreshold = 5, useCapture = false, noSlideClick = false, stopPropagation = false } = _param, restProps = _object_without_properties._(_param, [
        "Component",
        "onStart",
        "onStartX",
        "onStartY",
        "onMove",
        "onMoveX",
        "onMoveY",
        "onLeave",
        "onEnter",
        "onEnd",
        "onEndX",
        "onEndY",
        "onClickCapture",
        "usePointerHover",
        "slideThreshold",
        "useCapture",
        "noSlideClick",
        "stopPropagation"
    ]);
    const events = (0, _react.useMemo)(_touch.getSupportedEvents, []);
    const didSlide = (0, _react.useRef)(false);
    const gesture = (0, _react.useRef)(null);
    const handle = (e, handlers)=>{
        stopPropagation && e.stopPropagation();
        handlers.forEach((cb)=>{
            var _gesture_current_startT, _gesture_current;
            var _gesture_current_startT_getTime;
            const duration = Date.now() - ((_gesture_current_startT_getTime = (_gesture_current = gesture.current) === null || _gesture_current === void 0 ? void 0 : (_gesture_current_startT = _gesture_current.startT) === null || _gesture_current_startT === void 0 ? void 0 : _gesture_current_startT.getTime()) !== null && _gesture_current_startT_getTime !== void 0 ? _gesture_current_startT_getTime : 0);
            cb && cb(_object_spread_props._(_object_spread._({}, gesture.current), {
                duration,
                originalEvent: e
            }));
        });
    };
    const listenerParams = {
        capture: useCapture,
        passive: false
    };
    const listeners = [
        (0, _useEventListener.useEventListener)(events[1], onMove, listenerParams),
        (0, _useEventListener.useEventListener)(events[2], onEnd, listenerParams),
        (0, _useEventListener.useEventListener)(events[3], onEnd, listenerParams)
    ];
    const subscribe = (el)=>{
        if (!el) {
            return;
        }
        listeners.forEach((l)=>l.add(el));
    };
    const unsubscribe = ()=>{
        listeners.forEach((l)=>l.remove());
    };
    const enterHandler = (0, _useEventListener.useEventListener)(usePointerHover ? 'pointerenter' : 'mouseenter', onEnter);
    const leaveHandler = (0, _useEventListener.useEventListener)(usePointerHover ? 'pointerleave' : 'mouseleave', onLeave);
    const startHandler = (0, _useEventListener.useEventListener)(events[0], (e)=>{
        gesture.current = (0, _touch.initGesture)((0, _touch.coordX)(e), (0, _touch.coordY)(e));
        handle(e, [
            onStart,
            onStartX,
            onStartY
        ]);
        subscribe((0, _touch.touchEnabled)() ? // see: #235, #1968, https://stackoverflow.com/a/45760014
        e.target : // if the pointer goes outside the container.
        // Can be fixed by PointerEvents' setPointerCapture later
        window.document);
    }, {
        capture: useCapture,
        passive: false
    });
    const containerRef = (0, _react.useRef)();
    (0, _useEnhancedEffect.useEnhancedEffect)(()=>{
        const el = containerRef.current;
        if (el) {
            enterHandler.add(el);
            leaveHandler.add(el);
            startHandler.add(el);
        }
    }, [
        Component
    ]);
    function onMove(e) {
        var _gesture_current;
        const { isPressed, isX, isY, startX = 0, startY = 0 } = (_gesture_current = gesture.current) !== null && _gesture_current !== void 0 ? _gesture_current : {};
        if (isPressed) {
            var _gesture_current1;
            const clientX = (0, _touch.coordX)(e);
            const clientY = (0, _touch.coordY)(e);
            // Offsets
            const shiftX = clientX - startX;
            const shiftY = clientY - startY;
            // Absolute offset values
            const shiftXAbs = Math.abs(shiftX);
            const shiftYAbs = Math.abs(shiftY);
            // If determining multitouch, interrupt the gesture
            if (!!e.touches && e.touches.length > 1) {
                onEnd(e);
                return;
            }
            // If we haven't determined yet
            if (!isX && !isY) {
                const willBeX = shiftXAbs >= slideThreshold && shiftXAbs > shiftYAbs;
                const willBeY = shiftYAbs >= slideThreshold && shiftYAbs > shiftXAbs;
                const willBeSlidedX = willBeX && (!!onMoveX || !!_onMove);
                const willBeSlidedY = willBeY && (!!onMoveY || !!_onMove);
                if (gesture.current) {
                    Object.assign(gesture.current, {
                        isY: willBeY,
                        isX: willBeX,
                        isSlideX: willBeSlidedX,
                        isSlideY: willBeSlidedY,
                        isSlide: willBeSlidedX || willBeSlidedY
                    });
                }
            }
            if ((_gesture_current1 = gesture.current) === null || _gesture_current1 === void 0 ? void 0 : _gesture_current1.isSlide) {
                Object.assign(gesture.current, {
                    clientX,
                    clientY,
                    shiftX,
                    shiftY,
                    shiftXAbs,
                    shiftYAbs
                });
                handle(e, [
                    _onMove,
                    gesture.current.isSlideX && onMoveX,
                    gesture.current.isSlideY && onMoveY
                ]);
            }
        }
    }
    function onEnd(e) {
        var _gesture_current;
        const { isPressed, isSlide, isSlideX, isSlideY } = (_gesture_current = gesture.current) !== null && _gesture_current !== void 0 ? _gesture_current : {};
        if (isPressed) {
            handle(e, [
                _onEnd,
                isSlideY && onEndY,
                isSlideX && onEndX
            ]);
        }
        const isTouchEnabled = (0, _touch.touchEnabled)();
        if (isTouchEnabled && isSlide) {
            // If it's a touch device and touchmove was detected,
            // the click event won't be triggered
            didSlide.current = false;
        } else {
            didSlide.current = Boolean(isSlide);
        }
        gesture.current = {};
        // If it was a touch event, simulate hover cancellation
        if (isTouchEnabled) {
            onLeave && onLeave(e);
        }
        unsubscribe();
    }
    /**
   * Dragstart event handler
   * Cancels the native browser behavior for nested links and images
   */ const onDragStart = (e)=>{
        const target = e.target;
        if (target.tagName === 'A' || target.tagName === 'IMG') {
            e.preventDefault();
        }
    };
    /**
   * Click event handler for the component
   * Cancels the transition through the nested link if a swipe was detected
   */ const postGestureClick = (e)=>{
        if (!didSlide.current) {
            onClickCapture && onClickCapture(e);
            return;
        }
        if (noSlideClick) {
            e.stopPropagation();
            e.preventDefault();
        } else {
            onClickCapture && onClickCapture(e);
        }
        didSlide.current = false;
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({}, restProps), {
        onDragStart: onDragStart,
        onClickCapture: postGestureClick,
        ref: containerRef
    }));
};

//# sourceMappingURL=Touch.js.map
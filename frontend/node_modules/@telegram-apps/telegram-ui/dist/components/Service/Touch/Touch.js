/* eslint-disable @typescript-eslint/no-use-before-define */ 'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, useRef } from "react";
import { useEnhancedEffect } from "../../../hooks/useEnhancedEffect";
import { useEventListener } from "../../../hooks/useEventListener";
import { coordX, coordY, getSupportedEvents, initGesture, touchEnabled } from "./helpers/touch";
/**
 * This component is copied from the VKUI library for convenient handling of pointer events
 * https://github.com/VKCOM/VKUI/blob/master/packages/vkui/src/components/Touch/Touch.tsx#L65
 */ export const Touch = (_param)=>{
    var { Component = 'div', onStart, onStartX, onStartY, onMove: _onMove, onMoveX, onMoveY, onLeave, onEnter, onEnd: _onEnd, onEndX, onEndY, onClickCapture, usePointerHover, slideThreshold = 5, useCapture = false, noSlideClick = false, stopPropagation = false } = _param, restProps = _object_without_properties(_param, [
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
    const events = useMemo(getSupportedEvents, []);
    const didSlide = useRef(false);
    const gesture = useRef(null);
    const handle = (e, handlers)=>{
        stopPropagation && e.stopPropagation();
        handlers.forEach((cb)=>{
            var _gesture_current_startT, _gesture_current;
            var _gesture_current_startT_getTime;
            const duration = Date.now() - ((_gesture_current_startT_getTime = (_gesture_current = gesture.current) === null || _gesture_current === void 0 ? void 0 : (_gesture_current_startT = _gesture_current.startT) === null || _gesture_current_startT === void 0 ? void 0 : _gesture_current_startT.getTime()) !== null && _gesture_current_startT_getTime !== void 0 ? _gesture_current_startT_getTime : 0);
            cb && cb(_object_spread_props(_object_spread({}, gesture.current), {
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
        useEventListener(events[1], onMove, listenerParams),
        useEventListener(events[2], onEnd, listenerParams),
        useEventListener(events[3], onEnd, listenerParams)
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
    const enterHandler = useEventListener(usePointerHover ? 'pointerenter' : 'mouseenter', onEnter);
    const leaveHandler = useEventListener(usePointerHover ? 'pointerleave' : 'mouseleave', onLeave);
    const startHandler = useEventListener(events[0], (e)=>{
        gesture.current = initGesture(coordX(e), coordY(e));
        handle(e, [
            onStart,
            onStartX,
            onStartY
        ]);
        subscribe(touchEnabled() ? // see: #235, #1968, https://stackoverflow.com/a/45760014
        e.target : // if the pointer goes outside the container.
        // Can be fixed by PointerEvents' setPointerCapture later
        window.document);
    }, {
        capture: useCapture,
        passive: false
    });
    const containerRef = useRef();
    useEnhancedEffect(()=>{
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
            const clientX = coordX(e);
            const clientY = coordY(e);
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
        const isTouchEnabled = touchEnabled();
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
    return /*#__PURE__*/ _jsx(Component, _object_spread_props(_object_spread({}, restProps), {
        onDragStart: onDragStart,
        onClickCapture: postGestureClick,
        ref: containerRef
    }));
};

//# sourceMappingURL=Touch.js.map
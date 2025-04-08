import { AllHTMLAttributes, DragEvent, ElementType, MouseEvent as ReactMouseEvent } from 'react';
import { CustomTouchEvent, Gesture } from './helpers/types';
export interface TouchProps extends AllHTMLAttributes<HTMLElement> {
    usePointerHover?: boolean;
    useCapture?: boolean;
    slideThreshold?: number;
    noSlideClick?: boolean;
    onEnter?: HoverHandler;
    onLeave?: HoverHandler;
    onStart?: TouchEventHandler;
    onStartX?: TouchEventHandler;
    onStartY?: TouchEventHandler;
    onMove?: TouchEventHandler;
    onMoveX?: TouchEventHandler;
    onMoveY?: TouchEventHandler;
    onEnd?: TouchEventHandler;
    onEndX?: TouchEventHandler;
    onEndY?: TouchEventHandler;
    stopPropagation?: boolean;
    Component?: ElementType;
}
export interface TouchEvent extends Gesture {
    originalEvent: CustomTouchEvent;
}
type HoverHandler = (outputEvent: MouseEvent) => void;
export type TouchEventHandler = (e: TouchEvent) => void;
export type ClickHandler = (e: ReactMouseEvent<HTMLElement>) => void;
export type DragHandler = (e: DragEvent<HTMLElement>) => void;
/**
 * This component is copied from the VKUI library for convenient handling of pointer events
 * https://github.com/VKCOM/VKUI/blob/master/packages/vkui/src/components/Touch/Touch.tsx#L65
 */
export declare const Touch: ({ Component, onStart, onStartX, onStartY, onMove: _onMove, onMoveX, onMoveY, onLeave, onEnter, onEnd: _onEnd, onEndX, onEndY, onClickCapture, usePointerHover, slideThreshold, useCapture, noSlideClick, stopPropagation, ...restProps }: TouchProps) => JSX.Element;
export {};
//# sourceMappingURL=Touch.d.ts.map
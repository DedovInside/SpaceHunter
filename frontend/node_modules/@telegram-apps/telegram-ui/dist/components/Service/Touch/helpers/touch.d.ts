import { CustomTouchEvent, Gesture } from './types';
export declare const initGesture: (startX: number, startY: number) => Gesture;
export declare const coordX: (e: CustomTouchEvent) => number;
export declare const coordY: (e: CustomTouchEvent) => number;
export declare const touchEnabled: () => boolean;
export declare const getSupportedEvents: () => string[];
//# sourceMappingURL=touch.d.ts.map
/// <reference types="react" />
interface Wave {
    x: number;
    y: number;
    date: number;
    pointerId: number;
}
export interface RippleProps {
    clicks: Wave[];
}
export declare const Ripple: ({ clicks }: RippleProps) => JSX.Element;
export {};
//# sourceMappingURL=Ripple.d.ts.map
import { AriaAttributes } from 'react';
import type { InternalDraggingType } from '../types';
export declare const extractSliderAriaAttributes: <T extends AriaAttributes>(restProps: T) => {
    aria: {
        ariaLabel: string | undefined;
        ariaValueText: string | undefined;
        ariaLabelledBy: string | undefined;
    };
} & Omit<T, "aria-label" | "aria-labelledby" | "aria-valuetext">;
export declare const getDraggingTypeByTargetDataset: <T extends (EventTarget & HTMLElement) | null>(target: T) => InternalDraggingType | null;
//# sourceMappingURL=html.d.ts.map
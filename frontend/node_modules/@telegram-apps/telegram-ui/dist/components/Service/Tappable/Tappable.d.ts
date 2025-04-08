import { AllHTMLAttributes, ElementType } from 'react';
export interface TappableProps extends AllHTMLAttributes<HTMLElement> {
    /** HTML Tag */
    Component?: ElementType;
    interactiveAnimation?: 'opacity' | 'background';
}
export declare const Tappable: import("react").ForwardRefExoticComponent<TappableProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Tappable.d.ts.map
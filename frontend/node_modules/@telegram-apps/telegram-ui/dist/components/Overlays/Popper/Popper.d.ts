import { ElementType, HTMLAttributes, RefObject } from 'react';
import { VirtualElement } from '@floating-ui/react-dom';
import { FloatingArrowProps } from './components/FloatingArrow/FloatingArrow';
import { UseFloatingMiddlewaresOptions } from './hooks/useFloatingMiddlewares';
export interface PopperProps extends Omit<UseFloatingMiddlewaresOptions, 'arrowHeight' | 'arrowPadding' | 'arrowRef'>, HTMLAttributes<HTMLDivElement> {
    /** Reference to the target element or virtual element for precise positioning. */
    targetRef: RefObject<HTMLElement> | VirtualElement;
    /** Configuration and customization options for the floating arrow component. */
    arrowProps?: FloatingArrowProps & {
        /** Optionally override the default arrow height. */
        height?: number;
        /** Optionally override the default arrow padding. */
        padding?: number;
    };
    /** Optional custom component for the arrow icon, replacing the default. */
    ArrowIcon?: FloatingArrowProps['Icon'];
    /** Defines the root element type of the Popper, allowing for semantic customization. */
    Component?: ElementType;
    /** Opt-in feature to automatically update Popper's position when the target element resizes. */
    autoUpdateOnTargetResize?: boolean;
}
/**
 * Renders a Popper component, leveraging floating UI for dynamic, responsive positioning.
 * Supports advanced configurations like virtual elements, custom arrows, and auto-position updates.
 */
export declare const Popper: import("react").ForwardRefExoticComponent<PopperProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Popper.d.ts.map
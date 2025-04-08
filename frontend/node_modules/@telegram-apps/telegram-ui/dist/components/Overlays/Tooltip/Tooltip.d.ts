/// <reference types="react" />
import { PopperProps } from '../../../components/Overlays/Popper/Popper';
export interface TooltipProps extends PopperProps {
    /** Defines the theme of the tooltip, affecting its background and text color. */
    mode?: 'light' | 'dark';
}
/**
 * The Tooltip component provides text labels that appear when the user hovers over, focuses on,
 * or touches an element. It's built on top of the Popper component for automatic positioning
 * relative to the target element. The tooltip supports light and dark modes for different visual
 * contexts and uses the Caption component for its content to ensure consistent typography.
 */
export declare const Tooltip: ({ mode, children, className, arrowProps, ...restProps }: TooltipProps) => JSX.Element;
//# sourceMappingURL=Tooltip.d.ts.map
import { ComponentType, HTMLAttributes, SVGAttributes } from 'react';
import { Placement } from '@floating-ui/react-dom';
import { Coords } from './helpers/getArrowPositionData';
export interface FloatingArrowProps extends HTMLAttributes<HTMLDivElement> {
    /** Optional distance from the target element, influencing the arrow's placement. */
    offset?: number;
    /** When true, the offset distance remains constant, regardless of the arrow's placement. */
    isStaticOffset?: boolean;
    /** Coordinates for the arrow, useful for precise positioning when the arrow is not directly adjacent to its target. */
    coords?: Coords;
    /** The preferred placement of the arrow relative to its target element. */
    placement?: Placement;
    /** A React component for rendering the arrow icon, allowing for custom arrow designs. */
    Icon?: ComponentType<SVGAttributes<SVGSVGElement>>;
}
/**
 * FloatingArrow dynamically positions an arrow indicator relative to a floating element,
 * such as a tooltip to signify its association with a target element.
 * Supports custom arrow icons and positioning adjustments.
 */
export declare const FloatingArrow: import("react").ForwardRefExoticComponent<FloatingArrowProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FloatingArrow.d.ts.map
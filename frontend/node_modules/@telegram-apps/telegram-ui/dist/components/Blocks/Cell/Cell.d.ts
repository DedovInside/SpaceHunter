import { ElementType, ReactElement, ReactNode } from 'react';
import { BadgeProps } from '../../../components/Blocks/Badge/Badge';
import { TappableProps } from '../../../components/Service/Tappable/Tappable';
export interface CellProps extends Omit<TappableProps, 'Component'> {
    /** Content displayed above the main content as a subheading */
    subhead?: ReactNode;
    /** Main content displayed as a header */
    children?: ReactNode;
    /** Content displayed alongside the header as a hint */
    hint?: ReactNode;
    /** A badge component to be displayed next to the header */
    titleBadge?: ReactElement<BadgeProps>;
    /** Content displayed below the header as a subtitle */
    subtitle?: ReactNode;
    /** Additional description displayed below the subtitle */
    description?: ReactNode;
    /** Content or elements to be displayed on the left side of the cell */
    before?: ReactNode;
    /** Content or elements to be displayed on the right side of the cell */
    after?: ReactNode;
    /** Custom component or HTML tag to be used as the root element of the cell, div by default */
    Component?: ElementType;
    /** Controls the hover state of the component externally, useful for keyboard navigation */
    hovered?: boolean;
    /** Allows for multiline content without truncation */
    multiline?: boolean;
}
/**
 * `Cell` component acts as a flexible and interactive container for various types of content,
 * enabling the creation of complex list items, form fields, and more. It leverages the `Tappable`
 * component for interaction and is designed to be flexible and extensible.
 */
export declare const Cell: import("react").ForwardRefExoticComponent<CellProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Cell.d.ts.map
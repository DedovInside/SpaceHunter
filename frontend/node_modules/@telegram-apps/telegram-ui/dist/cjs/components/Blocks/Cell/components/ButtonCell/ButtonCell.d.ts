import { ElementType, ReactNode } from 'react';
import { TappableProps } from '../../../../../../components/Service/Tappable/Tappable';
export interface ButtonCellProps extends Omit<TappableProps, 'Component'> {
    /** Determines the button cell's visual theme, influencing color and style. */
    mode?: 'default' | 'destructive';
    /** Element or component displayed before the main content, adding visual context or functionality. */
    before?: ReactNode;
    /** Element or component displayed after the main content, typically indicating a possible action or outcome. */
    after?: ReactNode;
    /** Specifies the root element type for more semantic HTML structure or integration with navigation libraries. */
    Component?: ElementType;
    /** The content within the button cell, usually text. */
    children?: ReactNode;
}
/**
 * Renders an interactive cell component with optional leading and trailing elements. Designed to be flexible,
 * supporting various content structures and interaction models within UI designs.
 */
export declare const ButtonCell: import("react").ForwardRefExoticComponent<ButtonCellProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=ButtonCell.d.ts.map
import { ElementType, HTMLAttributes } from 'react';
export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    /** Specifies the HTML tag or React component used to render the list, defaulting to `div`. */
    Component?: ElementType;
}
/**
 * Renders a container for list items, applying platform-specific styles for consistency across different operating systems.
 * This component serves as a foundational element for creating lists in a user interface.
 */
export declare const List: ({ className, children, Component, ...restProps }: ListProps) => JSX.Element;
//# sourceMappingURL=List.d.ts.map
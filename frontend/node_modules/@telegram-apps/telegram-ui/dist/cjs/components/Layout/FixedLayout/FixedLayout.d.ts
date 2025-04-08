import { AllHTMLAttributes, ElementType } from 'react';
export interface FixedLayoutProps extends AllHTMLAttributes<HTMLElement> {
    /** The component type to render, allowing for semantic HTML use. Defaults to 'div'. */
    Component?: ElementType;
    /** Determines the vertical positioning of the layout within its container. Options are 'top' or 'bottom'. */
    vertical?: 'top' | 'bottom';
}
/**
 * This component provides a flexible way to create a layout that is fixed to either the top or bottom of its parent container.
 * It's useful for creating headers, footers, or any element that should remain in view regardless of the scrolling content.
 */
export declare const FixedLayout: ({ Component, vertical, className, children, ...restProps }: FixedLayoutProps) => JSX.Element;
//# sourceMappingURL=FixedLayout.d.ts.map
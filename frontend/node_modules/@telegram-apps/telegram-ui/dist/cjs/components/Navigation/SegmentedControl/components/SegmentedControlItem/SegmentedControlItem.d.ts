import { ButtonHTMLAttributes } from 'react';
export interface SegmentedControlItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Whether the item is selected. Used by the parent SegmentedControl to style accordingly. */
    selected?: boolean;
}
/**
 * A component representing an individual item within a SegmentedControl.
 * It leverages the Tappable component for handling interactions and supports platform-specific styles.
 */
export declare const SegmentedControlItem: ({ selected, className, children, ...restProps }: SegmentedControlItemProps) => JSX.Element;
//# sourceMappingURL=SegmentedControlItem.d.ts.map
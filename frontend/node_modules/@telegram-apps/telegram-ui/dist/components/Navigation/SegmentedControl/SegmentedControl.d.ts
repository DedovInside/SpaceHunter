import { HTMLAttributes, ReactElement } from 'react';
import { SegmentedControlItemProps } from './components/SegmentedControlItem/SegmentedControlItem';
export interface SegmentedControlProps extends HTMLAttributes<HTMLDivElement> {
    /** Children should be SegmentedControl.Item components to render within the control. */
    children: ReactElement<SegmentedControlItemProps>[];
}
/**
 * The SegmentedControl component renders a set of options as a segmented control, commonly used for toggling between views or filtering content.
 * It is designed to adapt its appearance based on the platform, offering a native look and feel.
 * This component supports interactivity through selection, visually indicating the currently active option.
 */
export declare const SegmentedControl: {
    ({ className, children, ...restProps }: SegmentedControlProps): JSX.Element;
    Item: ({ selected, className, children, ...restProps }: SegmentedControlItemProps) => JSX.Element;
};
//# sourceMappingURL=SegmentedControl.d.ts.map
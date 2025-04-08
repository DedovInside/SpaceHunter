import { HTMLAttributes } from 'react';
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /** The current value of the progress bar, expressed as a percentage. The value should be between 0 and 100. */
    value?: number;
}
/**
 * Renders a linear progress bar that visually represents completion percentage towards a goal.
 * The component respects accessibility standards by including appropriate ARIA attributes.
 */
export declare const Progress: ({ value, className, ...restProps }: ProgressProps) => JSX.Element;
//# sourceMappingURL=Progress.d.ts.map
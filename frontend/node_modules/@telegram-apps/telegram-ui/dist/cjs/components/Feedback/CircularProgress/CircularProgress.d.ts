import { HTMLAttributes } from 'react';
export interface CircularProgressProps extends HTMLAttributes<HTMLOrSVGElement> {
    /** Specifies the size of the circular progress indicator. Can be 'small', 'medium', or 'large'. */
    size?: 'small' | 'medium' | 'large';
    /** Current progress of the circular indicator, expressed as a percentage from 0 to 100. */
    progress?: number;
}
/**
 * Renders a circular progress indicator, useful for displaying loading states or progress metrics.
 * The component dynamically adjusts its size and stroke based on the provided `size` prop and visually represents
 * the `progress` prop as a percentage of the circle's circumference.
 */
export declare const CircularProgress: ({ size, progress, }: CircularProgressProps) => JSX.Element | null;
//# sourceMappingURL=CircularProgress.d.ts.map
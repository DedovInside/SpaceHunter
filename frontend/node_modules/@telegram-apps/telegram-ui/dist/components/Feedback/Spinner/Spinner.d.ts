import { HTMLAttributes } from 'react';
export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    /** Determines the size of the spinner. Can be 'small' (s), 'medium' (m), or 'large' (l), with 'medium' being the default size. */
    size: 's' | 'm' | 'l';
}
/**
 * Provides a visual indicator for loading states across different platforms. It automatically selects
 * an appropriate spinner style based on the current platform, allowing for a consistent user experience.
 */
export declare const Spinner: ({ size, className, }: SpinnerProps) => JSX.Element;
//# sourceMappingURL=Spinner.d.ts.map
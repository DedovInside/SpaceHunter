import { HTMLAttributes } from 'react';
export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
    /** Total number of steps. */
    count: number;
    /** Current progress, indicating how many steps have been completed. Progress is 0-indexed and goes up to `count`. */
    progress: number;
}
/**
 * Renders a visual indicator of steps or progress in a process, such as a tutorial or a multi-step form.
 * It visually represents total steps and current progress.
 */
export declare const Steps: ({ className, count, progress }: StepsProps) => JSX.Element;
//# sourceMappingURL=Steps.d.ts.map
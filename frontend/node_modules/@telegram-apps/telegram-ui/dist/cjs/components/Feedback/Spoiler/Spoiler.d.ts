import { HTMLAttributes } from 'react';
export interface SpoilerProps extends HTMLAttributes<HTMLDivElement> {
    /** Controls the visibility of the content inside the spoiler. */
    visible?: boolean;
}
/**
 * Provides a way to hide or show content, such as details or spoilers, with a simple click.
 * The visibility state can be controlled externally via props or toggled by user interaction.
 */
export declare const Spoiler: ({ visible, className, children, ...restProps }: SpoilerProps) => JSX.Element;
//# sourceMappingURL=Spoiler.d.ts.map
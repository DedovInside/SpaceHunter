import { HTMLAttributes } from 'react';
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /** If true, disables the shimmering animation of the skeleton. */
    withoutAnimation?: boolean;
    /** If true, the skeleton overlay is shown above the content. When false, the skeleton is hidden, showing any underlying content. */
    visible?: boolean;
}
/**
 * Used as a placeholder during the loading state of a component or page. It can visually mimic
 * the layout that will be replaced by the actual content once loaded, improving user experience by reducing perceived loading times.
 */
export declare const Skeleton: ({ withoutAnimation, visible, className, children, ...restProps }: SkeletonProps) => JSX.Element;
//# sourceMappingURL=Skeleton.d.ts.map
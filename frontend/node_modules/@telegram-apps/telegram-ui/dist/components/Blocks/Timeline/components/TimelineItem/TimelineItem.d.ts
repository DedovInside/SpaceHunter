import { HTMLAttributes, ReactNode } from 'react';
export interface TimelineItemProps extends HTMLAttributes<HTMLLIElement> {
    /** Internal prop, but you can change it. Marks line and dot of the item */
    mode?: 'active' | 'pre-active';
    /** If true, the item will be horizontal, passed from parent */
    horizontal?: boolean;
    /** Header of the item */
    header?: string;
    /** Description of the item */
    children?: ReactNode;
}
export declare const TimelineItem: ({ header, horizontal, mode, className, children, ...restProps }: TimelineItemProps) => JSX.Element;
//# sourceMappingURL=TimelineItem.d.ts.map
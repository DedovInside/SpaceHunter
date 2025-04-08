import { HTMLAttributes, ReactElement } from 'react';
import { TimelineItemProps } from './components/TimelineItem/TimelineItem';
export interface TimelineProps extends HTMLAttributes<HTMLUListElement> {
    /** Determines the orientation of the timeline. If true, the timeline is displayed horizontally. */
    horizontal?: boolean;
    /** The index of the active item in the timeline, which affects styling to indicate progress. */
    active?: number;
    /** The children of the Timeline, expected to be a collection of `Timeline.Item` components. */
    children: ReactElement<TimelineItemProps>[];
}
/**
 * Renders a sequence of events or steps in either a vertical or horizontal layout. It is flexible,
 * supporting an active state to visually distinguish past, present, and future steps.
 */
export declare const Timeline: {
    ({ active, horizontal, className, children, ...restProps }: TimelineProps): JSX.Element;
    Item: ({ header, horizontal, mode, className, children, ...restProps }: TimelineItemProps) => JSX.Element;
};
//# sourceMappingURL=Timeline.d.ts.map
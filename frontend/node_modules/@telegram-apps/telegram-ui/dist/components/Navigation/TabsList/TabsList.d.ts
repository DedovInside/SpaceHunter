import { HTMLAttributes, ReactElement } from 'react';
import { TabsItemProps } from './components/TabsItem/TabsItem';
export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
    /** Children should be TabsList.Item components to be rendered as tabs. */
    children: ReactElement<TabsItemProps>[];
}
/**
 * The TabsList component renders a list of tabs, typically used for navigating between different views
 * or filtering content. It visually indicates the currently active tab and supports custom styling.
 */
export declare const TabsList: {
    ({ className, children, ...restProps }: TabsListProps): JSX.Element;
    Item: ({ selected, className, children, ...restProps }: TabsItemProps) => JSX.Element;
};
//# sourceMappingURL=TabsList.d.ts.map
import { ButtonHTMLAttributes } from 'react';
export interface TabsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Indicates if the tab item is currently selected. */
    selected?: boolean;
}
/**
 * Tabs.Item component represents an individual tab within a TabsList.
 * It can be interactively selected to display associated content.
 */
export declare const TabsItem: ({ selected, className, children, ...restProps }: TabsItemProps) => JSX.Element;
//# sourceMappingURL=TabsItem.d.ts.map
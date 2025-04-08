import { HTMLAttributes, ReactElement } from 'react';
import { TabbarItemProps } from './components/TabbarItem/TabbarItem';
export interface TabbarProps extends HTMLAttributes<HTMLDivElement> {
    /** The child elements of the Tabbar, expected to be `Tabbar.Item` components. */
    children: ReactElement<TabbarItemProps>[];
}
/**
 * Serves as a container for `Tabbar.Item` components, rendering a navigational tab bar.
 * Utilizes a `FixedLayout` to ensure the tab bar remains positioned at a specific area within a view,
 * typically at the bottom of the screen, making it ideal for mobile or web application navigation menus.
 *
 * The component adapts its styling based on the platform, providing a consistent look and feel across different devices.
 */
export declare const Tabbar: {
    ({ children, className, ...restProps }: TabbarProps): JSX.Element;
    Item: ({ selected, text, children, className, ...restProps }: TabbarItemProps) => JSX.Element;
};
//# sourceMappingURL=Tabbar.d.ts.map
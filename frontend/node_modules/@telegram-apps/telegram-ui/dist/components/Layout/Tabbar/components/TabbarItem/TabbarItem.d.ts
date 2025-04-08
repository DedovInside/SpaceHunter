import { ButtonHTMLAttributes, ReactNode } from 'react';
export interface TabbarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Indicates whether the tab is selected or active. */
    selected?: boolean;
    /** The text displayed on the tab. */
    text?: string;
    /** The icon displayed on the tab. It should be passed as a ReactNode with dimensions of 28x28. */
    children?: ReactNode;
}
/**
 * Represents an individual tab within a `Tabbar`.
 * Each `Tabbar.Item` typically contains an icon and optional text.
 * When selected, the tab exhibit different visual styles to indicate its active state.
 *
 * The component adapts its styling based on the platform, providing a consistent look and feel across different devices.
 */
export declare const TabbarItem: ({ selected, text, children, className, ...restProps }: TabbarItemProps) => JSX.Element;
//# sourceMappingURL=TabbarItem.d.ts.map
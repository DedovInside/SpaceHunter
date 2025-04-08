import { HTMLAttributes, ReactNode } from 'react';
export interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
    /** Type of divider to use between breadcrumb items. */
    divider?: 'dot' | 'slash' | 'chevron';
    /** Children elements, expected to be breadcrumb items. */
    children?: ReactNode;
}
/**
 * The Breadcrumbs component displays a navigation trail for users to follow back to the starting or entry point.
 * It supports customizable dividers to fit different design needs.
 */
export declare const Breadcrumbs: {
    ({ divider, className, children, }: BreadcrumbsProps): JSX.Element;
    Item: ({ Component, className, children, ...restProps }: import("./components/BreadCrumbsItem/BreadCrumbsItem").BreadCrumbsItemProps) => JSX.Element;
};
//# sourceMappingURL=Breadcrumbs.d.ts.map
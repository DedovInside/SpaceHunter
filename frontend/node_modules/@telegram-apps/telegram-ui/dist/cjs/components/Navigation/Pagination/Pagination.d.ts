import { HTMLAttributes } from 'react';
import { UsePaginationProps } from './hooks/types';
export interface PaginationProps extends UsePaginationProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Controls whether the Pagination component is interactive. */
    disabled?: boolean;
}
/**
 * The Pagination component displays a set of navigation controls allowing users to navigate through pages of content.
 * It is built on top of a custom hook that manages pagination logic and state.
 * This component can be customized to hide next/previous buttons, specify boundary and sibling count for pagination items, and handle page changes through an `onChange` callback.
 */
export declare const Pagination: ({ boundaryCount, count, defaultPage, hideNextButton, hidePrevButton, onChange, page, disabled, siblingCount, className, ...restProps }: PaginationProps) => JSX.Element;
//# sourceMappingURL=Pagination.d.ts.map
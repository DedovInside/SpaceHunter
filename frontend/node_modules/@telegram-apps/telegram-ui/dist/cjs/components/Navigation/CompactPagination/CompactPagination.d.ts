import { HTMLAttributes, ReactElement } from 'react';
import { CompactPaginationItemProps } from './components/CompactPaginationItem/CompactPaginationItem';
export interface CompactPaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** Sets the color theme of the pagination. */
    mode?: 'default' | 'ambient' | 'white';
    /** Contains pagination items. */
    children?: ReactElement<CompactPaginationItemProps>[];
}
/**
 * Displays a compact set of pagination controls. This component allows users to navigate
 * between pages of content. It supports several themes for customization and can fit within various UI designs.
 */
export declare const CompactPagination: {
    ({ mode, children, className, ...restProps }: CompactPaginationProps): JSX.Element;
    Item: ({ selected, className, children, ...restProps }: CompactPaginationItemProps) => JSX.Element;
};
//# sourceMappingURL=CompactPagination.d.ts.map
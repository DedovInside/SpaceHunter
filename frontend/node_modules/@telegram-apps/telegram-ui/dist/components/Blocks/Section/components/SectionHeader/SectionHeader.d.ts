import { HTMLAttributes } from 'react';
export interface SectionHeaderProps extends HTMLAttributes<HTMLHeadElement> {
    /** Large title, changes font size, padding and color */
    large?: boolean;
}
export declare const SectionHeader: ({ large, className, children, ...restProps }: SectionHeaderProps) => JSX.Element;
//# sourceMappingURL=SectionHeader.d.ts.map
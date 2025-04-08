import { HTMLAttributes, ReactNode } from 'react';
export interface BlockquoteProps extends HTMLAttributes<HTMLDivElement> {
    /** Determines the content type within the blockquote, influencing its presentation. */
    type?: 'text' | 'other';
    /** An optional icon displayed in the top right corner of the blockquote. Defaults to a quote icon. */
    topRightIcon?: ReactNode;
    /** The main content of the blockquote. When `type` is 'text', this content is wrapped in a typography component. */
    children?: ReactNode;
}
/**
 * Renders a stylized blockquote element, typically used for quotations or special text. The component can include an
 * icon in the top right corner and supports different content types for flexible use within UI designs.
 */
export declare const Blockquote: ({ type, topRightIcon, className, children, ...restProps }: BlockquoteProps) => JSX.Element;
//# sourceMappingURL=Blockquote.d.ts.map
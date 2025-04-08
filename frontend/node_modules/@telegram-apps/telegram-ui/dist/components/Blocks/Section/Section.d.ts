import { HTMLAttributes, ReactNode } from 'react';
export interface SectionProps extends HTMLAttributes<HTMLElement> {
    /**
     * The content for the section header. If a string is passed, `Section.Header` is automatically used.
     * For more control or a large title, use `<Section.Header large>{headerText}</Section.Header>`.
     */
    header?: ReactNode;
    /**
     * The content for the section footer. If a string is passed, `Section.Footer` is automatically used.
     * For a centered footer, use `<Section.Footer centered>{footerText}</Section.Footer>`.
     */
    footer?: ReactNode;
}
/**
 * Organizes content into distinct sections with optional headers and footers. It automatically wraps
 * primitive header and footer content in the appropriate sub-components, and inserts dividers between
 * children when rendering multiple elements.
 */
export declare const Section: {
    ({ header, footer, className, children, ...restProps }: SectionProps): JSX.Element;
    Header: ({ large, className, children, ...restProps }: import("./components/SectionHeader/SectionHeader").SectionHeaderProps) => JSX.Element;
    Footer: ({ className, children, centered, ...restProps }: import("./components/SectionFooter/SectionFooter").SectionFooterProps) => JSX.Element;
};
//# sourceMappingURL=Section.d.ts.map
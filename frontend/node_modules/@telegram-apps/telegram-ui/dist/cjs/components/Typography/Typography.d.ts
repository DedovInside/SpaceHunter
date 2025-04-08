import { AllHTMLAttributes, ElementType } from 'react';
export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
    /** Controls the font weight of the text, with options ranging from light to bold. */
    weight?: '1' | '2' | '3';
    /** If true, transforms the text to uppercase for stylistic emphasis. */
    caps?: boolean;
    /** Specifies the HTML tag or React component used to render the text, defaulting to `span`. */
    Component?: ElementType;
    /** When true, removes the default margins around the text, useful for inline styling or custom layouts. */
    plain?: boolean;
}
/**
 * The Typography component is a versatile wrapper for text content, offering
 * customizable styling options such as weight, capitalization, and HTML tag. It's designed
 * to facilitate consistent text styling across your application, with support for customization
 * through props. The component is highly reusable and adaptable to various design needs.
 */
export declare const Typography: import("react").ForwardRefExoticComponent<TypographyProps & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Typography.d.ts.map
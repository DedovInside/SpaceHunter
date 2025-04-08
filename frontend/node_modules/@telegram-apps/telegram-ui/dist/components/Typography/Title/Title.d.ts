/// <reference types="react" />
import { TypographyProps } from '../Typography';
type TitleLevel = '1' | '2' | '3';
export interface TitleProps extends TypographyProps {
    /** Determines the size and semantic tag of the title, with options for `h2`, `h3`, or `h4`. */
    level?: TitleLevel;
}
/**
 * The Title component is designed to render text as a page or section heading,
 * providing clear hierarchy and structure within content. It supports three levels of emphasis,
 * allowing for flexibility in design while maintaining semantic integrity. By default, it uses `h3`
 * for its semantic HTML element but can be customized via the `level` prop or explicitly with the `Component` prop.
 */
export declare const Title: ({ level, className, Component, ...restProps }: TitleProps) => JSX.Element;
export {};
//# sourceMappingURL=Title.d.ts.map
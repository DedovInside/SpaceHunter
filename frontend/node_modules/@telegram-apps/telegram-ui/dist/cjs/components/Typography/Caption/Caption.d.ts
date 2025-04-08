/// <reference types="react" />
import { TypographyProps } from '../Typography';
type CaptionLevel = '1' | '2';
export interface CaptionProps extends Omit<TypographyProps, 'plain'> {
    /** The size level of the caption, influencing its styling and typography size. */
    level?: CaptionLevel;
}
/**
 * The Caption component is a text wrapper that applies specific typographic styles,
 * based on the provided `level` prop. It's built on top of the Typography component,
 * ensuring consistent text styling across the application. It primarily serves for text
 * that acts as a small, descriptive label or annotation.
 */
export declare const Caption: ({ level, className, Component, ...restProps }: CaptionProps) => JSX.Element;
export {};
//# sourceMappingURL=Caption.d.ts.map
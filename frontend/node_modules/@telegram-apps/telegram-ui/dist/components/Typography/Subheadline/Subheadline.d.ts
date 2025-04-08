/// <reference types="react" />
import { TypographyProps } from '../Typography';
type SubheadlineLevel = '1' | '2';
export interface SubheadlineProps extends TypographyProps {
    /** Determines the size of the subheadline, with `1` being the default and '2' providing a smaller option. */
    level?: SubheadlineLevel;
}
/**
 * The Subheadline component is designed to render text that serves as a secondary heading
 * or subheading within content. It leverages the Typography component for consistent text styling,
 * offering additional control over the text's size through the `level` prop. By default, it renders
 * as an `<h6>` element but can be customized with the `Component` prop.
 */
export declare const Subheadline: import("react").ForwardRefExoticComponent<SubheadlineProps & import("react").RefAttributes<unknown>>;
export {};
//# sourceMappingURL=Subheadline.d.ts.map
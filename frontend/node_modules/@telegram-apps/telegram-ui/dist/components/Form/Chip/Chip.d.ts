import { AllHTMLAttributes, ElementType, ReactNode } from 'react';
export interface ChipProps extends AllHTMLAttributes<HTMLDivElement> {
    /** Defines the visual style of the chip, affecting its background, border, and shadow. */
    mode?: 'elevated' | 'mono' | 'outline';
    /** Content or component to be placed before the main text, typically an icon or avatar. */
    before?: ReactNode;
    /** Content or component to be placed after the main text, such as an icon indicating an action. */
    after?: ReactNode;
    /** The main text content of the chip. */
    children?: ReactNode;
    /** Specifies the HTML tag or React component used to render the Chip, defaulting to `div`. */
    Component?: ElementType;
}
/**
 * Renders a compact element representing an input, attribute, or action. Chips can include icons, text, or both,
 * and are used to trigger actions, input information, or represent a complex piece of information in a compact form.
 */
export declare const Chip: ({ mode, before, after, className, children, Component, ...restProps }: ChipProps) => JSX.Element;
//# sourceMappingURL=Chip.d.ts.map
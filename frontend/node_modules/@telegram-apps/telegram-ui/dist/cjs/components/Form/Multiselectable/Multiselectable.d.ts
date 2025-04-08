import { InputHTMLAttributes } from 'react';
export interface MultiselectableProps extends InputHTMLAttributes<HTMLInputElement> {
}
/**
 * Renders a custom multiselectable checkbox input, adapting its icons based on the current platform (iOS or others).
 * Supports all standard input checkbox properties.
 */
export declare const Multiselectable: ({ style, className, disabled, ...restProps }: MultiselectableProps) => JSX.Element;
//# sourceMappingURL=Multiselectable.d.ts.map
import { InputHTMLAttributes } from 'react';
export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
}
/**
 * Renders a custom radio button, visually hiding the actual input while displaying custom icons for unchecked and checked states.
 * It supports all standard properties and events of an HTML input element of type "radio".
 */
export declare const Radio: ({ style, className, disabled, ...restProps }: RadioProps) => JSX.Element;
//# sourceMappingURL=Radio.d.ts.map
import { InputHTMLAttributes } from 'react';
export interface SelectableProps extends InputHTMLAttributes<HTMLInputElement> {
}
/**
 * Renders a custom styled selectable input (radio button), visually enhancing the default HTML input
 * with custom icons for both `iOS` and `base` platforms. It supports all standard properties and events
 * of an HTML input element of type "radio".
 *
 * The component determines the appropriate icon based on the operating platform, ensuring a consistent
 * user experience across different environments. The actual radio input is visually hidden while remaining
 * fully accessible and functional.
 */
export declare const Selectable: ({ style, className, disabled, ...restProps }: SelectableProps) => JSX.Element;
//# sourceMappingURL=Selectable.d.ts.map
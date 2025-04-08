import { InputHTMLAttributes } from 'react';
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
}
/**
 * A custom switch component that mimics the behavior of a checkbox input but with enhanced styling.
 * It supports all the standard attributes of an HTML input element of type "checkbox".
 * The appearance of the switch can be customized to match either a base or iOS platform style using CSS modules.
 */
export declare const Switch: ({ style, className, disabled, children, ...restProps }: SwitchProps) => JSX.Element;
//# sourceMappingURL=Switch.d.ts.map
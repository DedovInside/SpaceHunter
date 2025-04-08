import { InputHTMLAttributes } from 'react';
import { FormPublicProps } from '../../../components/Form/FormInput/FormInput';
export interface InputProps extends FormPublicProps, InputHTMLAttributes<HTMLInputElement> {
}
/**
 * Renders a text input field with enhanced styling and integration into a form structure. Supports customization through `FormPublicProps` and standard input attributes.
 * It automatically adapts typography and layout based on the platform, ensuring a consistent user experience across devices.
 */
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map
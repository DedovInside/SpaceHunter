import { InputHTMLAttributes } from 'react';
import { FormPublicProps } from '../../../../components/Form/FormInput/FormInput';
export interface ColorInputProps extends Omit<FormPublicProps, 'after'>, InputHTMLAttributes<HTMLInputElement> {
}
/**
 * Renders a color picker input within a form structure, displaying the selected color value.
 * It adapts the text style based on the platform and supports additional properties like header and status.
 */
export declare const ColorInput: ({ header, before, status, value: valueProp, defaultValue, className, onChange: onChangeProp, ...restProps }: ColorInputProps) => JSX.Element;
//# sourceMappingURL=ColorInput.d.ts.map
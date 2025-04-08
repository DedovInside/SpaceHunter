import { InputHTMLAttributes } from 'react';
import { FormPublicProps } from '../../../../components/Form/FormInput/FormInput';
export interface TextareaProps extends Omit<FormPublicProps, 'after' | 'before'>, InputHTMLAttributes<HTMLInputElement> {
}
/**
 * Wraps a standard HTML textarea element within a `FormInput` container, applying custom styles and functionality.
 * This component inherits the flexible design of the `FormInput`, allowing it to display a header and reflect different status styles.
 * The appearance and behavior of the textarea can be customized through various props, providing a seamless integration with forms.
 */
export declare const Textarea: ({ type, header, status, className, ...restProps }: TextareaProps) => JSX.Element;
//# sourceMappingURL=Textarea.d.ts.map
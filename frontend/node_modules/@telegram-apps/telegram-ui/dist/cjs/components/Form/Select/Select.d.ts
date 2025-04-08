import { ReactNode, SelectHTMLAttributes } from 'react';
import { FormPublicProps } from '../../../../components/Form/FormInput/FormInput';
export interface SelectProps extends Omit<FormPublicProps, 'after'>, SelectHTMLAttributes<HTMLSelectElement> {
    /** Children elements, typically `option` elements to be rendered within the select. */
    children: ReactNode;
}
/**
 * Renders a custom styled select input within a `FormInput` container. This component is designed to integrate seamlessly
 * with the form input styles, providing a consistent look and enhanced features such as a custom dropdown arrow and support
 * for platform-specific typography. The `FormInput` wrapper facilitates the inclusion of headers and status messages.
 */
export declare const Select: ({ header, before, status, className, ...restProps }: SelectProps) => JSX.Element;
//# sourceMappingURL=Select.d.ts.map
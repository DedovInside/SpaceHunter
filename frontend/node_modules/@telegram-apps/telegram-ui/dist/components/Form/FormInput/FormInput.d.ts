import { HTMLAttributes, ReactNode } from 'react';
export interface FormPublicProps {
    /** Defines the visual state of the form input (e.g., error, focused). */
    status?: 'default' | 'error' | 'focused';
    /** Optional header content, displayed above the form input on `base` platform. */
    header?: ReactNode;
    /** Content to be displayed before the form input, such as icons or labels. */
    before?: ReactNode;
    /** Content to be displayed after the form input, often used for action icons or additional information. */
    after?: ReactNode;
    /** Indicates if the form input is disabled. */
    disabled?: boolean;
}
export interface FormInputProps extends FormPublicProps, HTMLAttributes<HTMLLabelElement> {
}
/**
 * Wraps an input element with additional layout for headers, icons, or actions, providing a consistent look and feel across the form.
 * It supports conditional rendering based on the platform and the state of the form element.
 */
export declare const FormInput: import("react").ForwardRefExoticComponent<FormInputProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FormInput.d.ts.map
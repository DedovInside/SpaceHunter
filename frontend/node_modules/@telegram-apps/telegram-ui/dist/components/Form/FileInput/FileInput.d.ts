import { InputHTMLAttributes } from 'react';
export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Text label for the file input, used as the button label. */
    label?: string;
}
/**
 * Renders a file input disguised as a button, enhancing the user interface and improving usability.
 * It leverages the `ButtonCell` component for consistent styling across the application.
 */
export declare const FileInput: import("react").ForwardRefExoticComponent<FileInputProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FileInput.d.ts.map
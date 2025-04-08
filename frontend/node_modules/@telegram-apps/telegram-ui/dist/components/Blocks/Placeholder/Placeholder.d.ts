import { HTMLAttributes, ReactNode } from 'react';
export interface PlaceholderProps extends HTMLAttributes<HTMLElement> {
    /** Element(s) to be displayed as the primary visual content, typically an image or an animation. */
    children?: ReactNode;
    /** The primary text, usually a title or a header, for the placeholder. */
    header?: ReactNode;
    /** Additional descriptive text to provide more details or context. */
    description?: ReactNode;
    /** An actionable element, such as a button, to be placed in the placeholder for user interaction. */
    action?: ReactNode;
}
/** A versatile component designed to display a placeholder with optional text, images, and actions. */
export declare const Placeholder: ({ children, header, description, className, action, ...restProps }: PlaceholderProps) => JSX.Element;
//# sourceMappingURL=Placeholder.d.ts.map
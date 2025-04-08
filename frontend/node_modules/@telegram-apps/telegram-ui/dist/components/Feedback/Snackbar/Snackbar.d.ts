import { HTMLAttributes, ReactElement, ReactNode } from 'react';
import { LinkProps } from '../../../components/Navigation/Link/Link';
export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
    /** Element or component to be displayed on the left side of the snackbar. */
    before?: ReactNode;
    /** Element or component to be displayed on the right side of the snackbar. */
    after?: ReactNode;
    /** The main content of the snackbar, typically text or a message. */
    children?: ReactNode;
    /** Additional content displayed below the main message. */
    description?: ReactNode;
    /** A link component to be included in the snackbar for user interaction. */
    link?: ReactElement<LinkProps>;
    /** The duration in milliseconds after which the snackbar will automatically close. */
    duration?: number;
    /** Callback function invoked when the snackbar is closed. */
    onClose: () => void;
}
/**
 * Displays a brief message at the bottom of the screen, which can contain actions and other content.
 * It automatically dismisses after a set duration, providing feedback or interaction prompts to users.
 */
export declare const Snackbar: {
    ({ before, after, description, link, children, className, duration, onClose, ...restProps }: SnackbarProps): JSX.Element;
    Button: ({ className, children, ...restProps }: import("./components/SnackbarButton/SnackbarButton").SnackbarButtonProps) => JSX.Element;
};
//# sourceMappingURL=Snackbar.d.ts.map
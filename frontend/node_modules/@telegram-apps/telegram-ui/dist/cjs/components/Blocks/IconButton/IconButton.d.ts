import { ButtonHTMLAttributes } from 'react';
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Specifies the button size, affecting icon scaling. Recommended icon sizes are 20px for 's', 24px for 'm', and 28px for 'l'. */
    size?: 's' | 'm' | 'l';
    /** Defines the button's visual style, affecting its color and background. */
    mode?: 'bezeled' | 'plain' | 'gray' | 'outline';
}
/**
 * Renders an icon button with customizable size and mode. It utilizes the `Tappable` component for enhanced
 * touch interaction, allowing it to serve various UI actions efficiently.
 */
export declare const IconButton: ({ size, mode, className, children, ...restProps }: IconButtonProps) => JSX.Element;
//# sourceMappingURL=IconButton.d.ts.map
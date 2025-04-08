import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
    /** Specifies the banner's layout style, which can affect its positioning and styling. */
    type?: 'section' | 'inline';
    /** Element(s) to be placed on the left side of the banner, typically an icon or an image. */
    before?: ReactNode;
    /** Content displayed above the main content as a subheading */
    callout?: ReactNode;
    /** The main text or title displayed in the banner. */
    header?: ReactNode;
    /** Additional information or subtext displayed below the header. */
    subheader?: ReactNode;
    /** Further details or description provided under the subheader. */
    description?: ReactNode;
    /** Custom background component or design, such as an image or gradient, that covers the banner's area. */
    background?: ReactNode;
    /** Callback function that is executed when the close icon of the banner is clicked. If not provided, the close icon is not displayed. */
    onCloseIcon?: MouseEventHandler<HTMLButtonElement>;
    /** Content or components, such as buttons, displayed within the banner. For multiple elements, wrap them in a React.Fragment. */
    children?: ReactNode;
}
/**
 * The `Banner` component renders a prominent graphical element, typically displayed at the top of a page or section,
 * designed to grab the user's attention and convey important information.
 * It is a versatile tool used for various purposes such as branding, promotion, announcements, or navigation.
 */
export declare const Banner: ({ type, before, callout, header, subheader, description, background, className, children, onCloseIcon, ...restProps }: BannerProps) => JSX.Element;
//# sourceMappingURL=Banner.d.ts.map
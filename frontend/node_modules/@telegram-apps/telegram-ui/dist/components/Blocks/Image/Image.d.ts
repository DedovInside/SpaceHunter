import { ImgHTMLAttributes, ReactNode } from 'react';
export interface ImageProps extends ImgHTMLAttributes<HTMLElement> {
    /** Specifies the size of the image, with a default of 40. Sizes are defined in pixels. */
    size?: 20 | 24 | 28 | 40 | 48 | 96;
    /** An element (often an icon) displayed when the image fails to load or the `src` attribute is not provided. */
    fallbackIcon?: ReactNode;
    /** Optional children to render within the image component's container. */
    children?: ReactNode;
}
/**
 * Renders an image with optional fallback content. It supports custom sizing and will automatically
 * handle loading states and errors by optionally displaying a fallback icon. This component can also
 * include additional content, such as badges or overlays, as children.
 */
export declare const Image: {
    ({ size, className, alt, crossOrigin, decoding, loading, referrerPolicy, sizes, src, srcSet, useMap, style, fallbackIcon, children, onLoad, onError, ...restProps }: ImageProps): JSX.Element;
    Badge: ({ type, className, ...restProps }: import("./components/ImageBadge/ImageBadge").ImageBadgeProps) => JSX.Element | null;
};
//# sourceMappingURL=Image.d.ts.map
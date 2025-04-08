/// <reference types="react" />
import { ImageProps } from '../../../components/Blocks/Image/Image';
export interface AvatarProps extends ImageProps {
    /** One or two letters to be shown as a placeholder. `fallbackIcon` will not be used if `acronym` is provided. */
    acronym?: string;
}
/**
 * Renders an image with specific styles for an avatar presentation, including optional acronym display and badge support.
 * Utilizes the `Image` component for core functionality, enhancing it with avatar-specific features like acronyms and badges.
 */
export declare const Avatar: {
    ({ className, style, acronym, fallbackIcon, size, ...restProps }: AvatarProps): JSX.Element;
    Badge: ({ type, className, ...restProps }: import("./components/AvatarBadge/AvatarBadge").AvatarBadgeProps) => JSX.Element;
};
//# sourceMappingURL=Avatar.d.ts.map
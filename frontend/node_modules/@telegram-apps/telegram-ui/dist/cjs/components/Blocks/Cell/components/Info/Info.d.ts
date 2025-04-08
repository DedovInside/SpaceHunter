import { HTMLAttributes, ReactElement } from 'react';
import { AvatarStackProps } from '../../../../../../components/Blocks/AvatarStack/AvatarStack';
export interface InfoProps extends HTMLAttributes<HTMLDivElement> {
    /** Determines the type of content to display, affecting the layout and styling. */
    type: 'text' | 'avatarStack';
    /** Text content for the component, utilized when the `type` is set to 'text'. */
    subtitle?: string;
    /** An `AvatarStack` component to display when the `type` is 'avatarStack', showcasing multiple avatars. */
    avatarStack?: ReactElement<AvatarStackProps>;
}
/**
 * A versatile component designed to display either text information with an optional subtitle or a stack of avatars.
 * It adapts its structure based on the `type` prop, allowing for a wide range of use cases within user interfaces.
 */
export declare const Info: ({ type, subtitle, avatarStack, children, className, ...restProps }: InfoProps) => JSX.Element;
//# sourceMappingURL=Info.d.ts.map
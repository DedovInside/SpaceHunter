import { HTMLAttributes } from 'react';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** The visual style of the badge: 'number' displays the content, 'dot' shows a simple dot. */
    type: 'number' | 'dot';
    /** The color scheme of the badge, affecting its background and text color. */
    mode?: 'primary' | 'critical' | 'secondary' | 'gray' | 'white';
    /** Increases the size of the badge. Applicable only when `type` is 'number'. */
    large?: boolean;
}
/**
 * The `Badge` component renders a small numeric or dot indicator, typically used for notifications, statuses, or counts.
 * It supports several visual modes for different contexts (e.g., critical, primary) and can be sized normally or enlarged.
 */
export declare const Badge: ({ type, mode, large, className, children, ...restProps }: BadgeProps) => JSX.Element;
//# sourceMappingURL=Badge.d.ts.map
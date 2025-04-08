import { ButtonHTMLAttributes, ReactNode } from 'react';
import { InlineButtonsContextProps } from '../../InlineButtonsContext';
export interface InlineButtonsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Text displayed inside the button. */
    text?: string;
    /** Optional mode for styling the button, with 'plain' as the default. */
    mode?: InlineButtonsContextProps['mode'];
    /** Typically an Icon, to be rendered inside the button. */
    children?: ReactNode;
}
/**
 * `InlineButtons.Item` is designed for use within an InlineButtons container but can also serve as a standalone button
 * if used by itself. It supports displaying optional text and can inherit a styling mode from its parent InlineButtons
 * context or utilize a locally defined mode. This flexibility allows it to seamlessly integrate within various layouts
 * and designs, providing a consistent and adaptable interface element.
 */
export declare const InlineButtonsItem: ({ mode: propsMode, className, text, children, ...restProps }: InlineButtonsItemProps) => JSX.Element;
//# sourceMappingURL=InlineButtonsItem.d.ts.map
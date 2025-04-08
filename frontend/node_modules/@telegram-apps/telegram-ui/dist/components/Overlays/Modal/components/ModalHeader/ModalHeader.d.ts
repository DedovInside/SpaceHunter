import { HTMLAttributes, ReactNode } from 'react';
export interface ModalHeaderProps extends HTMLAttributes<HTMLElement> {
    /** Inserts a component before the header text, e.g. Icon */
    before?: ReactNode;
    /** Inserts a component after the header text, e.g. Icon */
    after?: ReactNode;
}
export declare const ModalHeader: import("react").ForwardRefExoticComponent<ModalHeaderProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=ModalHeader.d.ts.map
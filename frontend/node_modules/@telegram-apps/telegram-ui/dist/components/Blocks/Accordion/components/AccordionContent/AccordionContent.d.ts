import { HTMLAttributes } from 'react';
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
}
/**
 * Renders the content part of an accordion, leveraging context to control visibility and animation.
 * Utilizes `calcMaxHeight` for smooth height transitions during expand/collapse actions.
 */
export declare const AccordionContent: ({ className, children, ...restProps }: AccordionContentProps) => JSX.Element;
//# sourceMappingURL=AccordionContent.d.ts.map
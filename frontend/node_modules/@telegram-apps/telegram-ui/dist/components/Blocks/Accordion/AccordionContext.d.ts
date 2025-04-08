/// <reference types="react" />
export interface AccordionContextProps {
    labelId: string;
    contentId: string;
    expanded: boolean;
    onChange: (expanded: boolean) => void;
}
export declare const AccordionContext: import("react").Context<AccordionContextProps>;
//# sourceMappingURL=AccordionContext.d.ts.map
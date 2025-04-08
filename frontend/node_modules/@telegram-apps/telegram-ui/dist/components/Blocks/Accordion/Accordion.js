'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useObjectMemo } from "../../../hooks/useObjectMemo";
import { AccordionContent } from "./components/AccordionContent/AccordionContent";
import { AccordionSummary } from "./components/AccordionSummary/AccordionSummary";
import { useAccordionId } from "./hooks/useAccordionId";
import { AccordionContext } from "./AccordionContext";
/**
 * This component serves as a container for an accordion item, comprising a summary and
 * content sections. It uses the Context API to manage its state and to allow its children
 * (`Accordion.Summary` and `Accordion.Content`) to access shared state and callbacks.
 */ export const Accordion = ({ id, expanded, onChange, children })=>{
    const { labelId, contentId } = useAccordionId(id);
    const context = useObjectMemo({
        labelId,
        contentId,
        expanded,
        onChange
    });
    return /*#__PURE__*/ _jsx(AccordionContext.Provider, {
        value: context,
        children: children
    });
};
Accordion.Summary = AccordionSummary;
Accordion.Content = AccordionContent;

//# sourceMappingURL=Accordion.js.map
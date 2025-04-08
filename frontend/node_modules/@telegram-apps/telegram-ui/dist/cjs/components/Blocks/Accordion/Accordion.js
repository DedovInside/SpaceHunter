'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Accordion", {
    enumerable: true,
    get: function() {
        return Accordion;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _useObjectMemo = require("../../../hooks/useObjectMemo");
const _AccordionContent = require("./components/AccordionContent/AccordionContent");
const _AccordionSummary = require("./components/AccordionSummary/AccordionSummary");
const _useAccordionId = require("./hooks/useAccordionId");
const _AccordionContext = require("./AccordionContext");
const Accordion = ({ id, expanded, onChange, children })=>{
    const { labelId, contentId } = (0, _useAccordionId.useAccordionId)(id);
    const context = (0, _useObjectMemo.useObjectMemo)({
        labelId,
        contentId,
        expanded,
        onChange
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_AccordionContext.AccordionContext.Provider, {
        value: context,
        children: children
    });
};
Accordion.Summary = _AccordionSummary.AccordionSummary;
Accordion.Content = _AccordionContent.AccordionContent;

//# sourceMappingURL=Accordion.js.map
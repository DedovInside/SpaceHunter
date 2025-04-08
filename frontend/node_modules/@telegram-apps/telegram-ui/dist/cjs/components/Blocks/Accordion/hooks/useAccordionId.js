"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAccordionId", {
    enumerable: true,
    get: function() {
        return useAccordionId;
    }
});
const _react = require("react");
const useAccordionId = (id)=>{
    const randomId = (0, _react.useId)();
    const labelId = id !== null && id !== void 0 ? id : `Accordion${randomId}`;
    const contentId = `AccordionContent${id !== null && id !== void 0 ? id : randomId}`;
    return {
        labelId,
        contentId
    };
};

//# sourceMappingURL=useAccordionId.js.map
import { useId } from "react";
export const useAccordionId = (id)=>{
    const randomId = useId();
    const labelId = id !== null && id !== void 0 ? id : `Accordion${randomId}`;
    const contentId = `AccordionContent${id !== null && id !== void 0 ? id : randomId}`;
    return {
        labelId,
        contentId
    };
};

//# sourceMappingURL=useAccordionId.js.map
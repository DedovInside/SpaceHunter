import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { callMultiple } from "../../../../../helpers/function";
import { Icon24ChevronDown } from "../../../../../icons/24/chevron_down";
import { AccordionContext } from "../../AccordionContext";
import { Cell } from "../../../Cell/Cell";
/**
 * `AccordionSummary` serves as the clickable header for an accordion section, toggling the visibility of the content.
 * It incorporates an expand/collapse icon to visually indicate state. This component further extends `Cell` to provide
 * a consistent UI and accessibility features.
 */ export const AccordionSummary = (_param)=>{
    var { after, onClick, children } = _param, restProps = _object_without_properties(_param, [
        "after",
        "onClick",
        "children"
    ]);
    const { expanded, labelId, contentId, onChange } = useContext(AccordionContext);
    const toggle = ()=>onChange(!expanded);
    return /*#__PURE__*/ _jsx(Cell, _object_spread_props(_object_spread({
        id: labelId,
        "aria-expanded": expanded,
        "aria-controls": contentId,
        onClick: callMultiple(toggle, onClick),
        after: after || /*#__PURE__*/ _jsx(Icon24ChevronDown, {
            className: classNames("tgui-60e7968097edfa6f", expanded && "tgui-c900ecbd6d8d6d5e")
        })
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=AccordionSummary.js.map
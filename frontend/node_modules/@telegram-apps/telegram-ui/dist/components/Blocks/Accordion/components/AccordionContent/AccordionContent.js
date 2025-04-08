'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useRef } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { AccordionContext } from "../../AccordionContext";
import { calcMaxHeight } from "./helpers/calcMaxHeight";
/**
 * Renders the content part of an accordion, leveraging context to control visibility and animation.
 * Utilizes `calcMaxHeight` for smooth height transitions during expand/collapse actions.
 */ export const AccordionContent = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    const bodyRef = useRef(null);
    const { expanded, labelId, contentId } = useContext(AccordionContext);
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        id: contentId,
        role: "region",
        "aria-labelledby": labelId,
        "aria-hidden": !expanded,
        className: classNames("tgui-f23c0e195677169c", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx("div", {
            ref: bodyRef,
            className: "tgui-947b927060015de8",
            style: {
                maxHeight: calcMaxHeight(expanded, bodyRef.current)
            },
            children: children
        })
    }));
};

//# sourceMappingURL=AccordionContent.js.map
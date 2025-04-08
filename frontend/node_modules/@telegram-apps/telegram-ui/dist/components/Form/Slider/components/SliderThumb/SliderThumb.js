'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { VisuallyHidden } from "../../../../Service/VisuallyHidden/VisuallyHidden";
export const SliderThumb = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className, inputProps, withTooltip } = _param, restProps = _object_without_properties(_param, [
        "className",
        "inputProps",
        "withTooltip"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsx("span", _object_spread_props(_object_spread({
        className: classNames("tgui-83b7253102c6addc", platform === 'ios' && "tgui-96f5864d281f94a8", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread_props(_object_spread({}, inputProps), {
            Component: "input",
            type: "range",
            ref: ref,
            className: classNames("tgui-abdeb837bfc726cb", className),
            "aria-orientation": "horizontal"
        }))
    }));
});

//# sourceMappingURL=SliderThumb.js.map
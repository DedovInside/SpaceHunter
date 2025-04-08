import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { getArrowPositionData } from "./helpers/getArrowPositionData";
import { DefaultIcon } from "./icons/arrow";
const placementStyles = {
    right: "tgui-6c3deae89ec68e99",
    bottom: "tgui-fed67e27ad8cb75f",
    left: "tgui-b27d1c4f6222569e"
};
/**
 * FloatingArrow dynamically positions an arrow indicator relative to a floating element,
 * such as a tooltip to signify its association with a target element.
 * Supports custom arrow icons and positioning adjustments.
 */ export const FloatingArrow = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { style, offset, isStaticOffset, coords, placement = 'bottom', Icon = DefaultIcon, className } = _param, restProps = _object_without_properties(_param, [
        "style",
        "offset",
        "isStaticOffset",
        "coords",
        "placement",
        "Icon",
        "className"
    ]);
    const [arrowPlacement, arrowStyles] = getArrowPositionData(placement, coords, offset, isStaticOffset);
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        ref: ref,
        style: _object_spread({}, arrowStyles, style),
        className: classNames("tgui-97a62789a70393d0", arrowPlacement && placementStyles[arrowPlacement], className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(Icon, {
            className: "tgui-6ae8c47f9448321b"
        })
    }));
});

//# sourceMappingURL=FloatingArrow.js.map
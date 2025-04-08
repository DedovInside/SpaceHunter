'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
const platformStyles = {
    base: "tgui-2776944549f431fc",
    ios: "tgui-b70ccb0e7742541a"
};
/**
 * A custom switch component that mimics the behavior of a checkbox input but with enhanced styling.
 * It supports all the standard attributes of an HTML input element of type "checkbox".
 * The appearance of the switch can be customized to match either a base or iOS platform style using CSS modules.
 */ export const Switch = (_param)=>{
    var { style, className, disabled, children } = _param, restProps = _object_without_properties(_param, [
        "style",
        "className",
        "disabled",
        "children"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsxs("label", {
        className: classNames("tgui-a1dc55b304d32032", platformStyles[platform], disabled && "tgui-57a00e000de7483d", className),
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread_props(_object_spread({}, restProps), {
                Component: "input",
                type: "checkbox",
                className: "tgui-edfaab8ff474b0de",
                disabled: disabled
            })),
            /*#__PURE__*/ _jsx("div", {
                "aria-hidden": true,
                className: "tgui-3acc6d0262399734"
            }),
            children
        ]
    });
};

//# sourceMappingURL=Switch.js.map
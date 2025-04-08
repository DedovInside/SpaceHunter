'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
import { IconSelectableBase } from "./icons/selectable_base";
import { IconSelectableIOS } from "./icons/selectable_ios";
/**
 * Renders a custom styled selectable input (radio button), visually enhancing the default HTML input
 * with custom icons for both `iOS` and `base` platforms. It supports all standard properties and events
 * of an HTML input element of type "radio".
 *
 * The component determines the appropriate icon based on the operating platform, ensuring a consistent
 * user experience across different environments. The actual radio input is visually hidden while remaining
 * fully accessible and functional.
 */ export const Selectable = (_param)=>{
    var { style, className, disabled } = _param, restProps = _object_without_properties(_param, [
        "style",
        "className",
        "disabled"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsxs("label", {
        className: classNames("tgui-aa094d6480bfa32a", disabled && "tgui-7d31e315f5cc4733", className),
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread_props(_object_spread({}, restProps), {
                Component: "input",
                type: "radio",
                className: "tgui-6988c618806a5171",
                disabled: disabled
            })),
            platform === 'ios' && /*#__PURE__*/ _jsx(IconSelectableIOS, {
                className: "tgui-ad96577f259c5732",
                "aria-hidden": true
            }),
            platform === 'base' && /*#__PURE__*/ _jsx(IconSelectableBase, {
                className: "tgui-ad96577f259c5732",
                "aria-hidden": true
            })
        ]
    });
};

//# sourceMappingURL=Selectable.js.map
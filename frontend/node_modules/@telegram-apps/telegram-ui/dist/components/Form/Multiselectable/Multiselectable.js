'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
import { IconMultiselectable } from "./icons/multiselectable";
import { IconMultiselectableChecked } from "./icons/multiselectable_checked";
import { IconMultiselectableIOS } from "./icons/multiselectable_ios";
import { IconMultiselectableIOSChecked } from "./icons/multiselectable_ios_checked";
/**
 * Renders a custom multiselectable checkbox input, adapting its icons based on the current platform (iOS or others).
 * Supports all standard input checkbox properties.
 */ export const Multiselectable = (_param)=>{
    var { style, className, disabled } = _param, restProps = _object_without_properties(_param, [
        "style",
        "className",
        "disabled"
    ]);
    const platform = usePlatform();
    const UnCheckedIcon = platform === 'ios' ? IconMultiselectableIOS : IconMultiselectable;
    const CheckedIcon = platform === 'ios' ? IconMultiselectableIOSChecked : IconMultiselectableChecked;
    return /*#__PURE__*/ _jsxs("label", {
        className: classNames("tgui-9bfdebc3fdae031b", disabled && "tgui-55c1caaee1c1e33e", className),
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread_props(_object_spread({}, restProps), {
                Component: "input",
                type: "checkbox",
                className: "tgui-7cd9bbef46d9194c",
                disabled: disabled
            })),
            /*#__PURE__*/ _jsx(UnCheckedIcon, {
                className: "tgui-18734a5360b84fba",
                "aria-hidden": true
            }),
            /*#__PURE__*/ _jsx(CheckedIcon, {
                className: "tgui-1ec4b447aa5cf66a",
                "aria-hidden": true
            })
        ]
    });
};

//# sourceMappingURL=Multiselectable.js.map
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
import { IconRadio } from "./icons/radio";
import { IconRadioChecked } from "./icons/radio_checked";
/**
 * Renders a custom radio button, visually hiding the actual input while displaying custom icons for unchecked and checked states.
 * It supports all standard properties and events of an HTML input element of type "radio".
 */ export const Radio = (_param)=>{
    var { style, className, disabled } = _param, restProps = _object_without_properties(_param, [
        "style",
        "className",
        "disabled"
    ]);
    return /*#__PURE__*/ _jsxs("label", {
        className: classNames("tgui-de477a8e3910f19f", disabled && "tgui-d5c5e7402bfd8c12", className),
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread_props(_object_spread({}, restProps), {
                Component: "input",
                type: "radio",
                className: "tgui-743a4b0f25e5d51b",
                disabled: disabled
            })),
            /*#__PURE__*/ _jsx(IconRadio, {
                className: "tgui-bfcd091645843388",
                "aria-hidden": true
            }),
            /*#__PURE__*/ _jsx(IconRadioChecked, {
                className: "tgui-8d2d5ba97b4abd79",
                "aria-hidden": true
            })
        ]
    });
};

//# sourceMappingURL=Radio.js.map
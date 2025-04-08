import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
import { IconCheckbox } from "./icons/checkbox";
import { IconCheckboxChecked } from "./icons/checkbox_checked";
import { IconCheckboxIndeterminate } from "./icons/checkbox_indeterminate";
/**
 * Renders a checkbox input with custom styling and optional indeterminate state.
 * The component visually hides the actual input element for accessibility while providing a custom styled appearance.
 */ export const Checkbox = (_param)=>{
    var { style, className, disabled, indeterminate } = _param, restProps = _object_without_properties(_param, [
        "style",
        "className",
        "disabled",
        "indeterminate"
    ]);
    return /*#__PURE__*/ _jsxs("label", {
        className: classNames("tgui-abbb25a9ce45033e", disabled && "tgui-6e9776e8c33b2626", className),
        children: [
            /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread_props(_object_spread({}, restProps), {
                Component: "input",
                type: "checkbox",
                className: "tgui-60cf4cc79ba44c4f",
                disabled: disabled
            })),
            /*#__PURE__*/ _jsx(IconCheckbox, {
                className: "tgui-21b20ecaad17ccf9",
                "aria-hidden": true
            }),
            /*#__PURE__*/ _jsx("div", {
                "aria-hidden": true,
                className: "tgui-bca5056bf34297b0",
                children: indeterminate ? /*#__PURE__*/ _jsx(IconCheckboxIndeterminate, {}) : /*#__PURE__*/ _jsx(IconCheckboxChecked, {})
            })
        ]
    });
};

//# sourceMappingURL=Checkbox.js.map
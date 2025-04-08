'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { Icon20ChevronDown } from "../../../icons/20/chevron_down";
import { FormInput } from "../FormInput/FormInput";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
import { Text } from "../../Typography/Text/Text";
/**
 * Renders a custom styled select input within a `FormInput` container. This component is designed to integrate seamlessly
 * with the form input styles, providing a consistent look and enhanced features such as a custom dropdown arrow and support
 * for platform-specific typography. The `FormInput` wrapper facilitates the inclusion of headers and status messages.
 */ export const Select = (_param)=>{
    var { header, before, status, className } = _param, restProps = _object_without_properties(_param, [
        "header",
        "before",
        "status",
        "className"
    ]);
    const platform = usePlatform();
    const TypographyComponent = platform === 'ios' ? Text : Subheadline;
    return /*#__PURE__*/ _jsxs(FormInput, {
        header: header,
        before: before,
        status: status,
        className: classNames("tgui-919c5658483cae11", platform === 'ios' && "tgui-5edcb8465ee11055", className),
        children: [
            /*#__PURE__*/ _jsx(TypographyComponent, _object_spread({
                Component: "select",
                className: "tgui-a0742fd4c73756f7",
                multiple: false
            }, restProps)),
            /*#__PURE__*/ _jsx(Icon20ChevronDown, {
                "aria-hidden": true,
                className: "tgui-025a45d791e466f6"
            })
        ]
    });
};

//# sourceMappingURL=Select.js.map
'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { FormInput } from "../FormInput/FormInput";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
import { Text } from "../../Typography/Text/Text";
/**
 * Renders a text input field with enhanced styling and integration into a form structure. Supports customization through `FormPublicProps` and standard input attributes.
 * It automatically adapts typography and layout based on the platform, ensuring a consistent user experience across devices.
 */ export const Input = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { type = 'text', header, before, after, status, className, disabled } = _param, restProps = _object_without_properties(_param, [
        "type",
        "header",
        "before",
        "after",
        "status",
        "className",
        "disabled"
    ]);
    const platform = usePlatform();
    const TypographyComponent = platform === 'ios' ? Text : Subheadline;
    return /*#__PURE__*/ _jsx(FormInput, {
        header: header,
        before: before,
        after: after,
        status: status,
        disabled: disabled,
        className: classNames("tgui-d9de1f32aee12a15", platform === 'ios' && "tgui-9b2ad13855aef059", className),
        children: /*#__PURE__*/ _jsx(TypographyComponent, _object_spread({
            ref: ref,
            Component: "input",
            className: "tgui-c4863cd4c893a047",
            type: type,
            disabled: disabled
        }, restProps))
    });
});

//# sourceMappingURL=Input.js.map
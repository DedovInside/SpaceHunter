'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { classNames } from "../../../helpers/classNames";
import { callMultiple } from "../../../helpers/function";
import { usePlatform } from "../../../hooks/usePlatform";
import { FormInput } from "../FormInput/FormInput";
import { VisuallyHidden } from "../../Service/VisuallyHidden/VisuallyHidden";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
import { Text } from "../../Typography/Text/Text";
/**
 * Renders a color picker input within a form structure, displaying the selected color value.
 * It adapts the text style based on the platform and supports additional properties like header and status.
 */ export const ColorInput = (_param)=>{
    var { header, before, status, value: valueProp, defaultValue, className, onChange: onChangeProp } = _param, restProps = _object_without_properties(_param, [
        "header",
        "before",
        "status",
        "value",
        "defaultValue",
        "className",
        "onChange"
    ]);
    const platform = usePlatform();
    const [value, setValue] = useState(valueProp || defaultValue || '#EFEFF4');
    useEffect(()=>{
        if (!valueProp) {
            return;
        }
        setValue(valueProp);
    }, [
        valueProp
    ]);
    const onChange = (e)=>{
        setValue(e.target.value);
    };
    const TypographyComponent = platform === 'ios' ? Text : Subheadline;
    return /*#__PURE__*/ _jsx(FormInput, {
        header: header,
        before: before,
        after: /*#__PURE__*/ _jsxs("div", {
            className: "tgui-f3ab78c8048cb9dc",
            children: [
                /*#__PURE__*/ _jsx(VisuallyHidden, _object_spread({
                    Component: "input",
                    type: "color",
                    value: value,
                    onChange: callMultiple(onChange, onChangeProp)
                }, restProps)),
                /*#__PURE__*/ _jsx("div", {
                    className: "tgui-93beab8699996b1e",
                    style: {
                        backgroundColor: String(value)
                    }
                })
            ]
        }),
        status: status,
        className: classNames("tgui-a03137b1ed760aaf", platform === 'ios' && "tgui-ca1c0e2d013ae260", className),
        children: /*#__PURE__*/ _jsx(TypographyComponent, {
            caps: true,
            className: "tgui-21dba5277ef0ddd7",
            children: value
        })
    });
};

//# sourceMappingURL=ColorInput.js.map
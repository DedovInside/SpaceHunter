'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { FormInput } from "../FormInput/FormInput";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
import { Text } from "../../Typography/Text/Text";
/**
 * Wraps a standard HTML textarea element within a `FormInput` container, applying custom styles and functionality.
 * This component inherits the flexible design of the `FormInput`, allowing it to display a header and reflect different status styles.
 * The appearance and behavior of the textarea can be customized through various props, providing a seamless integration with forms.
 */ export const Textarea = (_param)=>{
    var { type = 'text', header, status, className } = _param, restProps = _object_without_properties(_param, [
        "type",
        "header",
        "status",
        "className"
    ]);
    const platform = usePlatform();
    const TypographyComponent = platform === 'ios' ? Text : Subheadline;
    return /*#__PURE__*/ _jsx(FormInput, {
        header: header,
        status: status,
        className: classNames("tgui-54ba5b4c7f1fd05a", platform === 'ios' && "tgui-2453b62de8016bfa", className),
        children: /*#__PURE__*/ _jsx(TypographyComponent, _object_spread({
            Component: "textarea",
            className: "tgui-d40ec83150e66029",
            type: type
        }, restProps))
    });
};

//# sourceMappingURL=Textarea.js.map
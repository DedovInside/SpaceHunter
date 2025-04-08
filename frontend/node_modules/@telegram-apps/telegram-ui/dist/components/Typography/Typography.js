import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../helpers/classNames";
const stylesWeight = {
    '1': "tgui-5c92f90c2701fa17",
    '2': "tgui-809f1f8a3f64154d",
    '3': "tgui-5b8bdfbd2af10f59"
};
/**
 * The Typography component is a versatile wrapper for text content, offering
 * customizable styling options such as weight, capitalization, and HTML tag. It's designed
 * to facilitate consistent text styling across your application, with support for customization
 * through props. The component is highly reusable and adaptable to various design needs.
 */ export const Typography = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { weight = '3', Component = 'span', plain = true, caps, className } = _param, restProps = _object_without_properties(_param, [
        "weight",
        "Component",
        "plain",
        "caps",
        "className"
    ]);
    return /*#__PURE__*/ _jsx(Component, _object_spread({
        ref: ref,
        className: classNames("tgui-c3e2e598bd70eee6", plain && "tgui-080a44e6ac3f4d27", weight && stylesWeight[weight], caps && "tgui-c602097b30e4ede9", className)
    }, restProps));
});

//# sourceMappingURL=Typography.js.map
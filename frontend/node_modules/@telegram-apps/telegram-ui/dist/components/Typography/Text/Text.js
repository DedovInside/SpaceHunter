import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { Typography } from "../Typography";
/**
 * Text component is designed for general-purpose text rendering,
 * offering a wide range of typographic options. It extends the Typography
 * component, inheriting its flexibility and styling capabilities.
 * This component is ideal for paragraphs, labels, or any textual content, providing
 * consistent styling across the application.
 */ export const Text = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { weight, className, Component } = _param, restProps = _object_without_properties(_param, [
        "weight",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ _jsx(Typography, _object_spread_props(_object_spread({
        ref: ref
    }, restProps), {
        weight: weight,
        className: classNames("tgui-65c206f0fd891b6b", className),
        Component: Component || 'span'
    }));
});

//# sourceMappingURL=Text.js.map
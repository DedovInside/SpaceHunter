import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { Typography } from "../Typography";
const subheadlineLevelStyles = {
    '1': "tgui-30064fce0d501f17",
    '2': "tgui-8f63cd31b2513281"
};
/**
 * The Subheadline component is designed to render text that serves as a secondary heading
 * or subheading within content. It leverages the Typography component for consistent text styling,
 * offering additional control over the text's size through the `level` prop. By default, it renders
 * as an `<h6>` element but can be customized with the `Component` prop.
 */ export const Subheadline = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { level = '1', className, Component } = _param, restProps = _object_without_properties(_param, [
        "level",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ _jsx(Typography, _object_spread_props(_object_spread({}, restProps), {
        ref: ref,
        className: classNames("tgui-266b6ffdbad2b90e", subheadlineLevelStyles[level], className),
        Component: Component || 'h6'
    }));
});

//# sourceMappingURL=Subheadline.js.map
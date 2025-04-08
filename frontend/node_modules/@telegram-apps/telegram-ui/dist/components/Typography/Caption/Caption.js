import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Typography } from "../Typography";
const captionLevelStyles = {
    '1': "tgui-2916d621b0ea5857",
    '2': "tgui-937d123c23df98b3"
};
/**
 * The Caption component is a text wrapper that applies specific typographic styles,
 * based on the provided `level` prop. It's built on top of the Typography component,
 * ensuring consistent text styling across the application. It primarily serves for text
 * that acts as a small, descriptive label or annotation.
 */ export const Caption = (_param)=>{
    var { level = '1', className, Component } = _param, restProps = _object_without_properties(_param, [
        "level",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ _jsx(Typography, _object_spread_props(_object_spread({}, restProps), {
        className: classNames("tgui-f37a43dcc29ade55", captionLevelStyles[level], className),
        Component: Component || 'span'
    }));
};

//# sourceMappingURL=Caption.js.map
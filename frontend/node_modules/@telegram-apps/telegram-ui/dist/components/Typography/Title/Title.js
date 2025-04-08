import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Typography } from "../Typography";
const titleLevelTags = {
    '1': 'h2',
    '2': 'h3',
    '3': 'h4'
};
const titleLevelStyles = {
    '1': "tgui-2fc52ee93e8068a6",
    '2': "tgui-72c2a480384c4fb1",
    '3': "tgui-45c5f45d3e9105f4"
};
/**
 * The Title component is designed to render text as a page or section heading,
 * providing clear hierarchy and structure within content. It supports three levels of emphasis,
 * allowing for flexibility in design while maintaining semantic integrity. By default, it uses `h3`
 * for its semantic HTML element but can be customized via the `level` prop or explicitly with the `Component` prop.
 */ export const Title = (_param)=>{
    var { level = '2', className, Component } = _param, restProps = _object_without_properties(_param, [
        "level",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ _jsx(Typography, _object_spread_props(_object_spread({}, restProps), {
        className: classNames("tgui-da537051a4a87aec", titleLevelStyles[level], className),
        Component: Component || titleLevelTags[level]
    }));
};

//# sourceMappingURL=Title.js.map
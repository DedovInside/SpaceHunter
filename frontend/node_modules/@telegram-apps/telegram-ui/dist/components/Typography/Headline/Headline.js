import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Typography } from "../Typography";
/**
 * The Headline component serves as a wrapper for text that is intended to be displayed prominently,
 * typically used for section headings or important titles within the application. It leverages the Typography
 * component for consistent typographic styling, offering a range of customization options through its props.
 * The component defaults to an `<h5>` HTML tag, providing semantic meaning and ensuring good SEO practices,
 * but can be customized as needed.
 */ export const Headline = (_param)=>{
    var { className, Component } = _param, restProps = _object_without_properties(_param, [
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ _jsx(Typography, _object_spread_props(_object_spread({}, restProps), {
        className: classNames("tgui-e05fce4753086879", className),
        Component: Component || 'h5'
    }));
};

//# sourceMappingURL=Headline.js.map
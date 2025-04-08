import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Typography } from "../Typography";
/**
 * The LargeTitle component is designed for prominent display text, typically used for major headings
 * or titles within an application. It encapsulates the Typography component's features, offering
 * extensive styling and semantic customization options while defaulting to an `<h1>` HTML element.
 * This choice of default component underscores the importance and hierarchy of the text it encapsulates,
 * making it suitable for primary page titles or significant headings.
 */ export const LargeTitle = (_param)=>{
    var { className, Component } = _param, restProps = _object_without_properties(_param, [
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ _jsx(Typography, _object_spread_props(_object_spread({}, restProps), {
        Component: Component || 'h1',
        className: classNames("tgui-c6d7432a5c12debe", className)
    }));
};

//# sourceMappingURL=LargeTitle.js.map
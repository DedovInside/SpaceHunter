import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
const verticalStyles = {
    top: "tgui-d83e15d73344cdc0",
    bottom: "tgui-01790b7e59088ea5"
};
/**
 * This component provides a flexible way to create a layout that is fixed to either the top or bottom of its parent container.
 * It's useful for creating headers, footers, or any element that should remain in view regardless of the scrolling content.
 */ export const FixedLayout = (_param)=>{
    var { Component = 'div', vertical = 'bottom', className, children } = _param, restProps = _object_without_properties(_param, [
        "Component",
        "vertical",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsx(Component, _object_spread_props(_object_spread({
        className: classNames("tgui-7a5facec9dc28fae", vertical && verticalStyles[vertical], className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=FixedLayout.js.map
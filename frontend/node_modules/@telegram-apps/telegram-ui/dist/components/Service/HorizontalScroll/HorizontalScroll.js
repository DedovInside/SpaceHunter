import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
export const HorizontalScroll = (_param)=>{
    var { Component = 'div', className, children } = _param, restProps = _object_without_properties(_param, [
        "Component",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsx(Component, _object_spread_props(_object_spread({
        className: classNames("tgui-4614301efc783534", className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=HorizontalScroll.js.map
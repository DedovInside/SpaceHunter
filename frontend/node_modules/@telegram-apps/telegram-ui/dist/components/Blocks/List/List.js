'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
/**
 * Renders a container for list items, applying platform-specific styles for consistency across different operating systems.
 * This component serves as a foundational element for creating lists in a user interface.
 */ export const List = (_param)=>{
    var { className, children, Component = 'div' } = _param, restProps = _object_without_properties(_param, [
        "className",
        "children",
        "Component"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsx(Component, _object_spread_props(_object_spread({
        className: classNames("tgui-389a43acd684137a", platform === 'ios' && "tgui-cfed40fe81d34ad5", className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=List.js.map
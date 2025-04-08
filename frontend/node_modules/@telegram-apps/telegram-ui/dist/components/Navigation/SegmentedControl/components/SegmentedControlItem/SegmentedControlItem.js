'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Tappable } from "../../../../Service/Tappable/Tappable";
import { Caption } from "../../../../Typography/Caption/Caption";
/**
 * A component representing an individual item within a SegmentedControl.
 * It leverages the Tappable component for handling interactions and supports platform-specific styles.
 */ export const SegmentedControlItem = (_param)=>{
    var { selected, className, children } = _param, restProps = _object_without_properties(_param, [
        "selected",
        "className",
        "children"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsx(Tappable, _object_spread_props(_object_spread({
        role: "tab",
        Component: "button",
        className: classNames("tgui-bbfb272d22eb23e8", platform === 'ios' && "tgui-513fce1023cbbd63", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(Caption, {
            weight: selected ? '2' : '3',
            children: children
        })
    }));
};

//# sourceMappingURL=SegmentedControlItem.js.map
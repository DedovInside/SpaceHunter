'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Tappable } from "../../../../Service/Tappable/Tappable";
import { Text } from "../../../../Typography/Text/Text";
/**
 * Tabs.Item component represents an individual tab within a TabsList.
 * It can be interactively selected to display associated content.
 */ export const TabsItem = (_param)=>{
    var { selected, className, children } = _param, restProps = _object_without_properties(_param, [
        "selected",
        "className",
        "children"
    ]);
    const platform = usePlatform();
    const iosWeight = selected ? '1' : '2';
    return /*#__PURE__*/ _jsx(Tappable, _object_spread_props(_object_spread({
        role: "tab",
        Component: "button",
        className: classNames("tgui-96892ceed80c1bf3", selected && "tgui-44ea091aea23df33", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(Text, {
            weight: platform === 'ios' ? iosWeight : '2',
            children: children
        })
    }));
};

//# sourceMappingURL=TabsItem.js.map
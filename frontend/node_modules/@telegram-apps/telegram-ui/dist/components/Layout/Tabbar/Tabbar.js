'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { FixedLayout } from "../FixedLayout/FixedLayout";
import { TabbarItem } from "./components/TabbarItem/TabbarItem";
/**
 * Serves as a container for `Tabbar.Item` components, rendering a navigational tab bar.
 * Utilizes a `FixedLayout` to ensure the tab bar remains positioned at a specific area within a view,
 * typically at the bottom of the screen, making it ideal for mobile or web application navigation menus.
 *
 * The component adapts its styling based on the platform, providing a consistent look and feel across different devices.
 */ export const Tabbar = (_param)=>{
    var { children, className } = _param, restProps = _object_without_properties(_param, [
        "children",
        "className"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsx(FixedLayout, _object_spread_props(_object_spread({
        className: classNames("tgui-53cb2ebed0c3b08f", platform === 'ios' && "tgui-a2b4713d67582227", className)
    }, restProps), {
        children: children
    }));
};
Tabbar.Item = TabbarItem;

//# sourceMappingURL=Tabbar.js.map
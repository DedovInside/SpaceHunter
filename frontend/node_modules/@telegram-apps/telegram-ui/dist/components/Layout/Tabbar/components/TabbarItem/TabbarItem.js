'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { hasReactNode } from "../../../../../helpers/react/node";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Tappable } from "../../../../Service/Tappable/Tappable";
import { Caption } from "../../../../Typography/Caption/Caption";
/**
 * Represents an individual tab within a `Tabbar`.
 * Each `Tabbar.Item` typically contains an icon and optional text.
 * When selected, the tab exhibit different visual styles to indicate its active state.
 *
 * The component adapts its styling based on the platform, providing a consistent look and feel across different devices.
 */ export const TabbarItem = (_param)=>{
    var { selected, text, children, className } = _param, restProps = _object_without_properties(_param, [
        "selected",
        "text",
        "children",
        "className"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsxs(Tappable, _object_spread_props(_object_spread({
        Component: "button",
        interactiveAnimation: "opacity",
        className: classNames("tgui-64cd0db020a9bacf", platform === 'ios' && "tgui-ecbb746748ea4134", selected && "tgui-e6658d0b8927f95e", className)
    }, restProps), {
        children: [
            hasReactNode(children) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-44d48e11585af170",
                children: children
            }),
            hasReactNode(text) && /*#__PURE__*/ _jsx(Caption, {
                className: "tgui-aeab497081949a15",
                weight: "2",
                level: platform === 'ios' ? '2' : '1',
                children: text
            })
        ]
    }));
};

//# sourceMappingURL=TabbarItem.js.map
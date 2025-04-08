import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement } from "react";
import { classNames } from "../../../helpers/classNames";
import { TabsItem } from "./components/TabsItem/TabsItem";
/**
 * The TabsList component renders a list of tabs, typically used for navigating between different views
 * or filtering content. It visually indicates the currently active tab and supports custom styling.
 */ export const TabsList = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    const childrenAsArray = Children.toArray(children);
    const checkedIndex = childrenAsArray.findIndex((option)=>{
        return /*#__PURE__*/ isValidElement(option) && option.props.selected;
    });
    const translateX = `translateX(${100 * checkedIndex}%)`;
    return /*#__PURE__*/ _jsxs("div", _object_spread_props(_object_spread({
        role: "tablist",
        className: classNames("tgui-89d3925598b8fd68", className)
    }, restProps), {
        children: [
            checkedIndex > -1 && /*#__PURE__*/ _jsx("div", {
                "aria-hidden": true,
                className: "tgui-8e986e14448c29e6",
                style: {
                    width: `${100 / childrenAsArray.length}%`,
                    transform: translateX
                }
            }),
            children
        ]
    }));
};
TabsList.Item = TabsItem;

//# sourceMappingURL=TabsList.js.map
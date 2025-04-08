import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { Children, cloneElement, isValidElement } from "react";
import { classNames } from "../../../helpers/classNames";
import { HorizontalScroll } from "../../Service/HorizontalScroll/HorizontalScroll";
import { TimelineItem } from "./components/TimelineItem/TimelineItem";
/**
 * Renders a sequence of events or steps in either a vertical or horizontal layout. It is flexible,
 * supporting an active state to visually distinguish past, present, and future steps.
 */ export const Timeline = (_param)=>{
    var { active, horizontal, className, children } = _param, restProps = _object_without_properties(_param, [
        "active",
        "horizontal",
        "className",
        "children"
    ]);
    const getChildMode = (childNumber)=>{
        if (!active) {
            return undefined;
        }
        if (childNumber <= active) {
            return 'active';
        }
        if (childNumber === active + 1) {
            return 'pre-active';
        }
        return undefined;
    };
    const Component = horizontal ? HorizontalScroll : 'ul';
    return /*#__PURE__*/ _jsx(Component, _object_spread_props(_object_spread({
        className: classNames("tgui-b53f1370d519b689", horizontal && "tgui-732e8859c58ffb77", className)
    }, restProps), {
        children: Children.map(children, (child, index)=>{
            if (/*#__PURE__*/ isValidElement(child)) {
                return /*#__PURE__*/ cloneElement(child, _object_spread({
                    mode: getChildMode(index + 1),
                    horizontal
                }, child.props));
            }
            return child;
        })
    }));
};
Timeline.Item = TimelineItem;

//# sourceMappingURL=Timeline.js.map
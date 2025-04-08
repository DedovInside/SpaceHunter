import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { hasReactNode } from "../../../helpers/react/node";
import { Caption } from "../../Typography/Caption/Caption";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
const typeStyles = {
    number: "tgui-562f7459d74103ea",
    dot: "tgui-4f69ed647e40e245"
};
const modeStyles = {
    primary: "tgui-6e63faaa2b33f4ae",
    critical: "tgui-4b52474c713ffa7c",
    secondary: "tgui-0278f262d68294f0",
    gray: "tgui-0883e451f3707277",
    white: "tgui-6b3dbcedd9052940"
};
/**
 * The `Badge` component renders a small numeric or dot indicator, typically used for notifications, statuses, or counts.
 * It supports several visual modes for different contexts (e.g., critical, primary) and can be sized normally or enlarged.
 */ export const Badge = (_param)=>{
    var { type, mode = 'primary', large, className, children } = _param, restProps = _object_without_properties(_param, [
        "type",
        "mode",
        "large",
        "className",
        "children"
    ]);
    const isNumber = type === 'number';
    return /*#__PURE__*/ _jsx("span", _object_spread_props(_object_spread({
        className: classNames("tgui-c8f4bcd1606fb026", typeStyles[type], modeStyles[mode], isNumber && large && "tgui-c1a5e9170826a773", className)
    }, restProps), {
        children: hasReactNode(children) && isNumber && /*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                large && /*#__PURE__*/ _jsx(Subheadline, {
                    Component: "span",
                    level: "2",
                    weight: "2",
                    children: children
                }),
                !large && /*#__PURE__*/ _jsx(Caption, {
                    weight: "2",
                    children: children
                })
            ]
        })
    }));
};

//# sourceMappingURL=Badge.js.map
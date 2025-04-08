'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { hasReactNode } from "../../../helpers/react/node";
import { usePlatform } from "../../../hooks/usePlatform";
import { Tappable } from "../../Service/Tappable/Tappable";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
const modeStyles = {
    elevated: "tgui-b8b077d7e3491b30",
    mono: "tgui-ccc3e4a302799418",
    outline: "tgui-fdfccf8f92c11530"
};
/**
 * Renders a compact element representing an input, attribute, or action. Chips can include icons, text, or both,
 * and are used to trigger actions, input information, or represent a complex piece of information in a compact form.
 */ export const Chip = (_param)=>{
    var { mode = 'elevated', before, after, className, children, Component = 'div' } = _param, restProps = _object_without_properties(_param, [
        "mode",
        "before",
        "after",
        "className",
        "children",
        "Component"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsxs(Tappable, _object_spread_props(_object_spread({
        Component: Component,
        interactiveAnimation: "opacity",
        className: classNames("tgui-6372c64c79ad2959", modeStyles[mode], className)
    }, restProps), {
        children: [
            hasReactNode(before) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-0d7ce20ebc0fc7aa",
                children: before
            }),
            /*#__PURE__*/ _jsx(Subheadline, {
                className: "tgui-9c7ff8cd23a6ea9a",
                level: platform === 'ios' ? '2' : '1',
                weight: "2",
                children: children
            }),
            hasReactNode(after) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-67f596882eb2b6ab",
                children: after
            })
        ]
    }));
};

//# sourceMappingURL=Chip.js.map
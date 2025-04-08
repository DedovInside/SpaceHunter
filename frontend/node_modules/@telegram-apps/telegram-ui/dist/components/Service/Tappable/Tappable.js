'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { useRipple } from "./components/Ripple/hooks/useRipple";
import { Ripple } from "./components/Ripple/Ripple";
export const Tappable = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { Component = 'div', children, className, interactiveAnimation = 'background', readOnly } = _param, restProps = _object_without_properties(_param, [
        "Component",
        "children",
        "className",
        "interactiveAnimation",
        "readOnly"
    ]);
    const platform = usePlatform();
    const { clicks, onPointerCancel, onPointerDown } = useRipple();
    const hasRippleEffect = platform === 'base' && interactiveAnimation === 'background' && !readOnly;
    return /*#__PURE__*/ _jsxs(Component, _object_spread_props(_object_spread({
        ref: ref,
        className: classNames("tgui-b5d680db78c4cc2e", platform === 'ios' && "tgui-34eb6f8b96874d40", interactiveAnimation === 'opacity' && "tgui-7c5d6c1f6bbe3eaf", className),
        onPointerCancel: onPointerCancel,
        onPointerDown: onPointerDown,
        readOnly: readOnly
    }, restProps), {
        children: [
            hasRippleEffect && /*#__PURE__*/ _jsx(Ripple, {
                clicks: clicks
            }),
            children
        ]
    }));
});

//# sourceMappingURL=Tappable.js.map
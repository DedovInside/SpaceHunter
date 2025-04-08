'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { hasReactNode } from "../../../helpers/react/node";
import { usePlatform } from "../../../hooks/usePlatform";
import { Spinner } from "../../Feedback/Spinner/Spinner";
import { Tappable } from "../../Service/Tappable/Tappable";
import { ButtonTypography } from "./components/ButtonTypography/ButtonTypography";
const modeStyles = {
    filled: "tgui-8a1ca9efa24f4809",
    bezeled: "tgui-91bda9a36246a33c",
    plain: "tgui-48956537c34690db",
    gray: "tgui-93106efd6b6d66ee",
    outline: "tgui-e884e36ff1faa596",
    white: "tgui-ba6d30cc81e39ae5"
};
const sizeStyles = {
    s: "tgui-13f23a224303ddaa",
    m: "tgui-1a16a49d89076ff4",
    l: "tgui-9cef742a22f195c9"
};
/**
 * Renders a button or a button-like element with customizable properties, such as size, mode, and loading state. Supports adding icons or other elements before and after the text.
 */ export const Button = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { type, size = 'm', before, after, stretched, children, className, mode = 'filled', loading, Component = 'button' } = _param, restProps = _object_without_properties(_param, [
        "type",
        "size",
        "before",
        "after",
        "stretched",
        "children",
        "className",
        "mode",
        "loading",
        "Component"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsxs(Tappable, _object_spread_props(_object_spread({
        ref: ref,
        type: type || 'button',
        Component: Component,
        className: classNames("tgui-117e77cd385a9c8d", mode && modeStyles[mode], size && sizeStyles[size], platform === 'ios' && "tgui-55e8aa7f5cea2280", stretched && "tgui-726846958fe7f4a0", loading && "tgui-490cb0f5ec4998f3", className)
    }, restProps), {
        children: [
            loading && /*#__PURE__*/ _jsx(Spinner, {
                className: "tgui-014f2b7d196b090d",
                size: "s"
            }),
            hasReactNode(before) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-06cc94d03a7c4dd7",
                children: before
            }),
            /*#__PURE__*/ _jsx(ButtonTypography, {
                className: "tgui-5f6014c0f063b6de",
                size: size,
                children: children
            }),
            hasReactNode(after) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-8310172a5320ab71",
                children: after
            })
        ]
    }));
});

//# sourceMappingURL=Button.js.map
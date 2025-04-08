'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { classNames } from "../../../helpers/classNames";
import { callMultiple } from "../../../helpers/function";
import { hasReactNode } from "../../../helpers/react/node";
import { usePlatform } from "../../../hooks/usePlatform";
import { FormInputTitle } from "./components/FormInputTitle";
const platformStyles = {
    base: "tgui-8ca550c2fc85eff5",
    ios: "tgui-7707c5d942b7b9af"
};
const formStatusStyles = {
    default: "tgui-7584398855f80ae6",
    error: "tgui-41b168516bddcf4b",
    focused: "tgui-89277928456f0e30"
};
/**
 * Wraps an input element with additional layout for headers, icons, or actions, providing a consistent look and feel across the form.
 * It supports conditional rendering based on the platform and the state of the form element.
 */ export const FormInput = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { status, header, before, after, disabled, children, className, onFocus: onFocusProp, onBlur: onBlurProp } = _param, restProps = _object_without_properties(_param, [
        "status",
        "header",
        "before",
        "after",
        "disabled",
        "children",
        "className",
        "onFocus",
        "onBlur"
    ]);
    const platform = usePlatform();
    const [isFocused, setIsFocused] = useState(false);
    const formStatus = status || (isFocused ? 'focused' : 'default');
    const onFocus = callMultiple(onFocusProp, ()=>{
        if (disabled) {
            return;
        }
        setIsFocused(true);
    });
    const onBlur = callMultiple(onBlurProp, ()=>setIsFocused(false));
    return /*#__PURE__*/ _jsxs("div", {
        ref: ref,
        className: classNames("tgui-92da7016c7125c02", platformStyles[platform], formStatusStyles[formStatus], disabled && "tgui-4a83fef1f04acb0e"),
        "aria-disabled": disabled,
        children: [
            /*#__PURE__*/ _jsxs("label", _object_spread_props(_object_spread({
                "aria-disabled": disabled,
                className: classNames("tgui-0f5050defacbf813", className),
                onFocus: onFocus,
                onBlur: onBlur
            }, restProps), {
                children: [
                    hasReactNode(before) && /*#__PURE__*/ _jsx("div", {
                        className: "tgui-8f04eff653cfa5e5",
                        children: before
                    }),
                    children,
                    hasReactNode(after) && /*#__PURE__*/ _jsx("div", {
                        className: "tgui-16b3783d394bc7db",
                        children: after
                    })
                ]
            })),
            hasReactNode(header) && platform === 'base' && /*#__PURE__*/ _jsx(FormInputTitle, {
                className: "tgui-9f9a52f695b85cc9",
                children: header
            })
        ]
    });
});

//# sourceMappingURL=FormInput.js.map
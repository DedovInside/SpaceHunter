'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FormInput", {
    enumerable: true,
    get: function() {
        return FormInput;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _function = require("../../../helpers/function");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _FormInputTitle = require("./components/FormInputTitle");
const platformStyles = {
    base: "tgui-8ca550c2fc85eff5",
    ios: "tgui-7707c5d942b7b9af"
};
const formStatusStyles = {
    default: "tgui-7584398855f80ae6",
    error: "tgui-41b168516bddcf4b",
    focused: "tgui-89277928456f0e30"
};
const FormInput = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { status, header, before, after, disabled, children, className, onFocus: onFocusProp, onBlur: onBlurProp } = _param, restProps = _object_without_properties._(_param, [
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
    const platform = (0, _usePlatform.usePlatform)();
    const [isFocused, setIsFocused] = (0, _react.useState)(false);
    const formStatus = status || (isFocused ? 'focused' : 'default');
    const onFocus = (0, _function.callMultiple)(onFocusProp, ()=>{
        if (disabled) {
            return;
        }
        setIsFocused(true);
    });
    const onBlur = (0, _function.callMultiple)(onBlurProp, ()=>setIsFocused(false));
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        ref: ref,
        className: (0, _classNames.classNames)("tgui-92da7016c7125c02", platformStyles[platform], formStatusStyles[formStatus], disabled && "tgui-4a83fef1f04acb0e"),
        "aria-disabled": disabled,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", _object_spread_props._(_object_spread._({
                "aria-disabled": disabled,
                className: (0, _classNames.classNames)("tgui-0f5050defacbf813", className),
                onFocus: onFocus,
                onBlur: onBlur
            }, restProps), {
                children: [
                    (0, _node.hasReactNode)(before) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-8f04eff653cfa5e5",
                        children: before
                    }),
                    children,
                    (0, _node.hasReactNode)(after) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-16b3783d394bc7db",
                        children: after
                    })
                ]
            })),
            (0, _node.hasReactNode)(header) && platform === 'base' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_FormInputTitle.FormInputTitle, {
                className: "tgui-9f9a52f695b85cc9",
                children: header
            })
        ]
    });
});

//# sourceMappingURL=FormInput.js.map
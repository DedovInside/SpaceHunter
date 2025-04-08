'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Button", {
    enumerable: true,
    get: function() {
        return Button;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _Spinner = require("../../Feedback/Spinner/Spinner");
const _Tappable = require("../../Service/Tappable/Tappable");
const _ButtonTypography = require("./components/ButtonTypography/ButtonTypography");
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
const Button = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { type, size = 'm', before, after, stretched, children, className, mode = 'filled', loading, Component = 'button' } = _param, restProps = _object_without_properties._(_param, [
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
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        ref: ref,
        type: type || 'button',
        Component: Component,
        className: (0, _classNames.classNames)("tgui-117e77cd385a9c8d", mode && modeStyles[mode], size && sizeStyles[size], platform === 'ios' && "tgui-55e8aa7f5cea2280", stretched && "tgui-726846958fe7f4a0", loading && "tgui-490cb0f5ec4998f3", className)
    }, restProps), {
        children: [
            loading && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Spinner.Spinner, {
                className: "tgui-014f2b7d196b090d",
                size: "s"
            }),
            (0, _node.hasReactNode)(before) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-06cc94d03a7c4dd7",
                children: before
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_ButtonTypography.ButtonTypography, {
                className: "tgui-5f6014c0f063b6de",
                size: size,
                children: children
            }),
            (0, _node.hasReactNode)(after) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-8310172a5320ab71",
                children: after
            })
        ]
    }));
});

//# sourceMappingURL=Button.js.map
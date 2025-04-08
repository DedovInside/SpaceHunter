'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Tappable", {
    enumerable: true,
    get: function() {
        return Tappable;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _useRipple = require("./components/Ripple/hooks/useRipple");
const _Ripple = require("./components/Ripple/Ripple");
const Tappable = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { Component = 'div', children, className, interactiveAnimation = 'background', readOnly } = _param, restProps = _object_without_properties._(_param, [
        "Component",
        "children",
        "className",
        "interactiveAnimation",
        "readOnly"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const { clicks, onPointerCancel, onPointerDown } = (0, _useRipple.useRipple)();
    const hasRippleEffect = platform === 'base' && interactiveAnimation === 'background' && !readOnly;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(Component, _object_spread_props._(_object_spread._({
        ref: ref,
        className: (0, _classNames.classNames)("tgui-b5d680db78c4cc2e", platform === 'ios' && "tgui-34eb6f8b96874d40", interactiveAnimation === 'opacity' && "tgui-7c5d6c1f6bbe3eaf", className),
        onPointerCancel: onPointerCancel,
        onPointerDown: onPointerDown,
        readOnly: readOnly
    }, restProps), {
        children: [
            hasRippleEffect && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Ripple.Ripple, {
                clicks: clicks
            }),
            children
        ]
    }));
});

//# sourceMappingURL=Tappable.js.map
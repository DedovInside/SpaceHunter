'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Switch", {
    enumerable: true,
    get: function() {
        return Switch;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const platformStyles = {
    base: "tgui-2776944549f431fc",
    ios: "tgui-b70ccb0e7742541a"
};
const Switch = (_param)=>{
    var { style, className, disabled, children } = _param, restProps = _object_without_properties._(_param, [
        "style",
        "className",
        "disabled",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
        className: (0, _classNames.classNames)("tgui-a1dc55b304d32032", platformStyles[platform], disabled && "tgui-57a00e000de7483d", className),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread_props._(_object_spread._({}, restProps), {
                Component: "input",
                type: "checkbox",
                className: "tgui-edfaab8ff474b0de",
                disabled: disabled
            })),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": true,
                className: "tgui-3acc6d0262399734"
            }),
            children
        ]
    });
};

//# sourceMappingURL=Switch.js.map
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Selectable", {
    enumerable: true,
    get: function() {
        return Selectable;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const _selectable_base = require("./icons/selectable_base");
const _selectable_ios = require("./icons/selectable_ios");
const Selectable = (_param)=>{
    var { style, className, disabled } = _param, restProps = _object_without_properties._(_param, [
        "style",
        "className",
        "disabled"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
        className: (0, _classNames.classNames)("tgui-aa094d6480bfa32a", disabled && "tgui-7d31e315f5cc4733", className),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread_props._(_object_spread._({}, restProps), {
                Component: "input",
                type: "radio",
                className: "tgui-6988c618806a5171",
                disabled: disabled
            })),
            platform === 'ios' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_selectable_ios.IconSelectableIOS, {
                className: "tgui-ad96577f259c5732",
                "aria-hidden": true
            }),
            platform === 'base' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_selectable_base.IconSelectableBase, {
                className: "tgui-ad96577f259c5732",
                "aria-hidden": true
            })
        ]
    });
};

//# sourceMappingURL=Selectable.js.map
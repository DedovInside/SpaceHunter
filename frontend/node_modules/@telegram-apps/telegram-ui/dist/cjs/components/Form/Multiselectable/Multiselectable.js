'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Multiselectable", {
    enumerable: true,
    get: function() {
        return Multiselectable;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const _multiselectable = require("./icons/multiselectable");
const _multiselectable_checked = require("./icons/multiselectable_checked");
const _multiselectable_ios = require("./icons/multiselectable_ios");
const _multiselectable_ios_checked = require("./icons/multiselectable_ios_checked");
const Multiselectable = (_param)=>{
    var { style, className, disabled } = _param, restProps = _object_without_properties._(_param, [
        "style",
        "className",
        "disabled"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const UnCheckedIcon = platform === 'ios' ? _multiselectable_ios.IconMultiselectableIOS : _multiselectable.IconMultiselectable;
    const CheckedIcon = platform === 'ios' ? _multiselectable_ios_checked.IconMultiselectableIOSChecked : _multiselectable_checked.IconMultiselectableChecked;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
        className: (0, _classNames.classNames)("tgui-9bfdebc3fdae031b", disabled && "tgui-55c1caaee1c1e33e", className),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread_props._(_object_spread._({}, restProps), {
                Component: "input",
                type: "checkbox",
                className: "tgui-7cd9bbef46d9194c",
                disabled: disabled
            })),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(UnCheckedIcon, {
                className: "tgui-18734a5360b84fba",
                "aria-hidden": true
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(CheckedIcon, {
                className: "tgui-1ec4b447aa5cf66a",
                "aria-hidden": true
            })
        ]
    });
};

//# sourceMappingURL=Multiselectable.js.map
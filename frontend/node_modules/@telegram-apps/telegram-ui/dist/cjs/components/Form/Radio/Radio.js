"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Radio", {
    enumerable: true,
    get: function() {
        return Radio;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const _radio = require("./icons/radio");
const _radio_checked = require("./icons/radio_checked");
const Radio = (_param)=>{
    var { style, className, disabled } = _param, restProps = _object_without_properties._(_param, [
        "style",
        "className",
        "disabled"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
        className: (0, _classNames.classNames)("tgui-de477a8e3910f19f", disabled && "tgui-d5c5e7402bfd8c12", className),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread_props._(_object_spread._({}, restProps), {
                Component: "input",
                type: "radio",
                className: "tgui-743a4b0f25e5d51b",
                disabled: disabled
            })),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_radio.IconRadio, {
                className: "tgui-bfcd091645843388",
                "aria-hidden": true
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_radio_checked.IconRadioChecked, {
                className: "tgui-8d2d5ba97b4abd79",
                "aria-hidden": true
            })
        ]
    });
};

//# sourceMappingURL=Radio.js.map
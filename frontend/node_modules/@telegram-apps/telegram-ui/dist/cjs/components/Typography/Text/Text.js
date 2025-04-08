"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Text", {
    enumerable: true,
    get: function() {
        return Text;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _Typography = require("../Typography");
const Text = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { weight, className, Component } = _param, restProps = _object_without_properties._(_param, [
        "weight",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Typography.Typography, _object_spread_props._(_object_spread._({
        ref: ref
    }, restProps), {
        weight: weight,
        className: (0, _classNames.classNames)("tgui-65c206f0fd891b6b", className),
        Component: Component || 'span'
    }));
});

//# sourceMappingURL=Text.js.map
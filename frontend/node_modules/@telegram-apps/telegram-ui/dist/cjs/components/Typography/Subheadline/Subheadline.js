"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Subheadline", {
    enumerable: true,
    get: function() {
        return Subheadline;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _Typography = require("../Typography");
const subheadlineLevelStyles = {
    '1': "tgui-30064fce0d501f17",
    '2': "tgui-8f63cd31b2513281"
};
const Subheadline = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { level = '1', className, Component } = _param, restProps = _object_without_properties._(_param, [
        "level",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Typography.Typography, _object_spread_props._(_object_spread._({}, restProps), {
        ref: ref,
        className: (0, _classNames.classNames)("tgui-266b6ffdbad2b90e", subheadlineLevelStyles[level], className),
        Component: Component || 'h6'
    }));
});

//# sourceMappingURL=Subheadline.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VisuallyHidden", {
    enumerable: true,
    get: function() {
        return VisuallyHidden;
    }
});
const _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
const _classNames = require("../../../helpers/classNames");
const VisuallyHidden = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { Component = 'span', className } = _param, restProps = _object_without_properties._(_param, [
        "Component",
        "className"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({}, restProps), {
        ref: ref,
        className: (0, _classNames.classNames)("tgui-b9fd8cdf929947df", className)
    }));
});

//# sourceMappingURL=VisuallyHidden.js.map
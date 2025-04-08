'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SliderThumb", {
    enumerable: true,
    get: function() {
        return SliderThumb;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _VisuallyHidden = require("../../../../Service/VisuallyHidden/VisuallyHidden");
const SliderThumb = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { className, inputProps, withTooltip } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "inputProps",
        "withTooltip"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-83b7253102c6addc", platform === 'ios' && "tgui-96f5864d281f94a8", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread_props._(_object_spread._({}, inputProps), {
            Component: "input",
            type: "range",
            ref: ref,
            className: (0, _classNames.classNames)("tgui-abdeb837bfc726cb", className),
            "aria-orientation": "horizontal"
        }))
    }));
});

//# sourceMappingURL=SliderThumb.js.map
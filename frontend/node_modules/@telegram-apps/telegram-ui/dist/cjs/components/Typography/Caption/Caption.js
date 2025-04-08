"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Caption", {
    enumerable: true,
    get: function() {
        return Caption;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _Typography = require("../Typography");
const captionLevelStyles = {
    '1': "tgui-2916d621b0ea5857",
    '2': "tgui-937d123c23df98b3"
};
const Caption = (_param)=>{
    var { level = '1', className, Component } = _param, restProps = _object_without_properties._(_param, [
        "level",
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Typography.Typography, _object_spread_props._(_object_spread._({}, restProps), {
        className: (0, _classNames.classNames)("tgui-f37a43dcc29ade55", captionLevelStyles[level], className),
        Component: Component || 'span'
    }));
};

//# sourceMappingURL=Caption.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Headline", {
    enumerable: true,
    get: function() {
        return Headline;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _Typography = require("../Typography");
const Headline = (_param)=>{
    var { className, Component } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "Component"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Typography.Typography, _object_spread_props._(_object_spread._({}, restProps), {
        className: (0, _classNames.classNames)("tgui-e05fce4753086879", className),
        Component: Component || 'h5'
    }));
};

//# sourceMappingURL=Headline.js.map
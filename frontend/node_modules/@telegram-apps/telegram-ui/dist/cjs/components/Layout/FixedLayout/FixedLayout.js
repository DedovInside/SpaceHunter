"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FixedLayout", {
    enumerable: true,
    get: function() {
        return FixedLayout;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const verticalStyles = {
    top: "tgui-d83e15d73344cdc0",
    bottom: "tgui-01790b7e59088ea5"
};
const FixedLayout = (_param)=>{
    var { Component = 'div', vertical = 'bottom', className, children } = _param, restProps = _object_without_properties._(_param, [
        "Component",
        "vertical",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-7a5facec9dc28fae", vertical && verticalStyles[vertical], className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=FixedLayout.js.map
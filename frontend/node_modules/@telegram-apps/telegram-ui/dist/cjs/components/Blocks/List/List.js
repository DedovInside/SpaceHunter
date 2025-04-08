'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "List", {
    enumerable: true,
    get: function() {
        return List;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const List = (_param)=>{
    var { className, children, Component = 'div' } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "children",
        "Component"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-389a43acd684137a", platform === 'ios' && "tgui-cfed40fe81d34ad5", className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=List.js.map
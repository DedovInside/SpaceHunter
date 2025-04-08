'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SectionHeader", {
    enumerable: true,
    get: function() {
        return SectionHeader;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _useHeaderComponents = require("./hooks/useHeaderComponents");
const SectionHeader = (_param)=>{
    var { large, className, children } = _param, restProps = _object_without_properties._(_param, [
        "large",
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const { Default, Large } = (0, _useHeaderComponents.useHeaderComponents)();
    const Component = large ? Large : Default;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("header", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-d0251b46536ac046", platform === 'ios' && "tgui-b7217abb24e8763a", large && "tgui-34fd1a25cc171439", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            Component: "h1",
            className: "tgui-9c200683b316fde6",
            children: children
        })
    }));
};

//# sourceMappingURL=SectionHeader.js.map
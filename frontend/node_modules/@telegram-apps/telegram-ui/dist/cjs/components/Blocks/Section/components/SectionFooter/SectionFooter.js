'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SectionFooter", {
    enumerable: true,
    get: function() {
        return SectionFooter;
    }
});
const _extends = require("@swc/helpers/_/_extends");
const _object_destructuring_empty = require("@swc/helpers/_/_object_destructuring_empty");
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Caption = require("../../../../Typography/Caption/Caption");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const FooterTypography = (_param)=>{
    var restProps = _extends._({}, _object_destructuring_empty._(_param));
    const platform = (0, _usePlatform.usePlatform)();
    if (platform === 'ios') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, _object_spread._({}, restProps));
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, _object_spread._({
        level: "2"
    }, restProps));
};
const SectionFooter = (_param)=>{
    var { className, children, centered } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "children",
        "centered"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("footer", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-dbb364e8ced00cc8", platform === 'ios' && "tgui-8c4c6f82ba895475", centered && "tgui-8ebba379083b615a", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(FooterTypography, {
            className: "tgui-67471b69da3e3062",
            children: children
        })
    }));
};

//# sourceMappingURL=SectionFooter.js.map
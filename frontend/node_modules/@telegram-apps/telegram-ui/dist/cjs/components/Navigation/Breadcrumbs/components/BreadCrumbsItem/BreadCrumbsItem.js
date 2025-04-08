"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BreadCrumbsItem", {
    enumerable: true,
    get: function() {
        return BreadCrumbsItem;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const BreadCrumbsItem = (_param)=>{
    var { Component = 'div', className, children } = _param, restProps = _object_without_properties._(_param, [
        "Component",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-32fe6ce00169d72e", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
            level: "2",
            weight: "2",
            children: children
        })
    }));
};

//# sourceMappingURL=BreadCrumbsItem.js.map
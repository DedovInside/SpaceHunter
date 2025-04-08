"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ModalHeader", {
    enumerable: true,
    get: function() {
        return ModalHeader;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Text = require("../../../../Typography/Text/Text");
const ModalHeader = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { before, after, className, children } = _param, props = _object_without_properties._(_param, [
        "before",
        "after",
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("header", _object_spread_props._(_object_spread._({
        ref: ref,
        className: (0, _classNames.classNames)("tgui-f67c8fb3553eee55", className)
    }, props), {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-09b5f6cfd7ba56ab",
                children: before
            }),
            platform === 'ios' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, {
                weight: "2",
                className: "tgui-7ce1022bfdcb0ae3",
                children: children
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-fe1d6742d85038d7",
                children: after
            })
        ]
    }));
});

//# sourceMappingURL=ModalHeader.js.map
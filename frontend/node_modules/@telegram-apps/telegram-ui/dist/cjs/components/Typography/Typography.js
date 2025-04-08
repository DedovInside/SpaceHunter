"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Typography", {
    enumerable: true,
    get: function() {
        return Typography;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../helpers/classNames");
const stylesWeight = {
    '1': "tgui-5c92f90c2701fa17",
    '2': "tgui-809f1f8a3f64154d",
    '3': "tgui-5b8bdfbd2af10f59"
};
const Typography = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { weight = '3', Component = 'span', plain = true, caps, className } = _param, restProps = _object_without_properties._(_param, [
        "weight",
        "Component",
        "plain",
        "caps",
        "className"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, _object_spread._({
        ref: ref,
        className: (0, _classNames.classNames)("tgui-c3e2e598bd70eee6", plain && "tgui-080a44e6ac3f4d27", weight && stylesWeight[weight], caps && "tgui-c602097b30e4ede9", className)
    }, restProps));
});

//# sourceMappingURL=Typography.js.map
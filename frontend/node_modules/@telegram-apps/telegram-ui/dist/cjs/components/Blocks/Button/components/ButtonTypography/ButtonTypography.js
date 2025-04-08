"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ButtonTypography", {
    enumerable: true,
    get: function() {
        return ButtonTypography;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const _Text = require("../../../../Typography/Text/Text");
const ButtonTypography = (_param)=>{
    var { size } = _param, restProps = _object_without_properties._(_param, [
        "size"
    ]);
    if (size === 'l') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, _object_spread._({
            weight: "2"
        }, restProps));
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, _object_spread._({
        level: "2",
        weight: "2"
    }, restProps));
};

//# sourceMappingURL=ButtonTypography.js.map
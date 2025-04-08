"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BannerDescriptionTypography", {
    enumerable: true,
    get: function() {
        return BannerDescriptionTypography;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _jsxruntime = require("react/jsx-runtime");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Caption = require("../../../../Typography/Caption/Caption");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const BannerDescriptionTypography = (props)=>{
    const platform = (0, _usePlatform.usePlatform)();
    if (platform === 'ios') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, _object_spread._({
            level: "1"
        }, props));
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, _object_spread._({
        level: "2"
    }, props));
};

//# sourceMappingURL=BannerDescriptionTypography.js.map
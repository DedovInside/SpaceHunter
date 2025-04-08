"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AvatarAcronym", {
    enumerable: true,
    get: function() {
        return AvatarAcronym;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _Caption = require("../../../../Typography/Caption/Caption");
const _Headline = require("../../../../Typography/Headline/Headline");
const _LargeTitle = require("../../../../Typography/LargeTitle/LargeTitle");
const _Title = require("../../../../Typography/Title/Title");
const AvatarAcronym = (_param)=>{
    var { size } = _param, restProps = _object_without_properties._(_param, [
        "size"
    ]);
    if (!size) {
        return null;
    }
    if (size <= 28) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, _object_spread._({
            level: size <= 24 ? '2' : '1',
            weight: "1",
            caps: true
        }, restProps));
    }
    if (size === 40) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Headline.Headline, _object_spread._({
            weight: "2",
            caps: true
        }, restProps));
    }
    if (size === 48) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Title.Title, _object_spread._({
            weight: "1",
            level: "3",
            caps: true
        }, restProps));
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_LargeTitle.LargeTitle, _object_spread._({
        weight: "1",
        caps: true
    }, restProps));
};

//# sourceMappingURL=AvatarAcronym.js.map
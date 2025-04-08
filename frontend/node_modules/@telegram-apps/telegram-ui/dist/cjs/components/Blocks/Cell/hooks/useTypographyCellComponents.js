'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useTypographyCellComponents", {
    enumerable: true,
    get: function() {
        return useTypographyCellComponents;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _jsxruntime = require("react/jsx-runtime");
const _usePlatform = require("../../../../hooks/usePlatform");
const _Caption = require("../../../Typography/Caption/Caption");
const _Subheadline = require("../../../Typography/Subheadline/Subheadline");
const _Text = require("../../../Typography/Text/Text");
const useTypographyCellComponents = ()=>{
    const platform = (0, _usePlatform.usePlatform)();
    const isIOS = platform === 'ios';
    const Title = (props)=>{
        if (isIOS) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, _object_spread._({}, props));
        }
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, _object_spread._({
            level: "1"
        }, props));
    };
    const Description = (props)=>{
        if (isIOS) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, _object_spread._({}, props));
        }
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, _object_spread._({
            level: "2"
        }, props));
    };
    return {
        Title,
        Description
    };
};

//# sourceMappingURL=useTypographyCellComponents.js.map
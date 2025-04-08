'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FormInputTitle", {
    enumerable: true,
    get: function() {
        return FormInputTitle;
    }
});
const _extends = require("@swc/helpers/_/_extends");
const _object_destructuring_empty = require("@swc/helpers/_/_object_destructuring_empty");
const _object_spread = require("@swc/helpers/_/_object_spread");
const _jsxruntime = require("react/jsx-runtime");
const _usePlatform = require("../../../../hooks/usePlatform");
const _Caption = require("../../../Typography/Caption/Caption");
const _Subheadline = require("../../../Typography/Subheadline/Subheadline");
const FormInputTitle = (_param)=>{
    var restProps = _extends._({}, _object_destructuring_empty._(_param));
    const platform = (0, _usePlatform.usePlatform)();
    if (platform === 'ios') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, _object_spread._({
            caps: true
        }, restProps));
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, _object_spread._({
        level: "2",
        weight: "2"
    }, restProps));
};

//# sourceMappingURL=FormInputTitle.js.map
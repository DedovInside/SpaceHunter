'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Textarea", {
    enumerable: true,
    get: function() {
        return Textarea;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _FormInput = require("../FormInput/FormInput");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const _Text = require("../../Typography/Text/Text");
const Textarea = (_param)=>{
    var { type = 'text', header, status, className } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "header",
        "status",
        "className"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const TypographyComponent = platform === 'ios' ? _Text.Text : _Subheadline.Subheadline;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_FormInput.FormInput, {
        header: header,
        status: status,
        className: (0, _classNames.classNames)("tgui-54ba5b4c7f1fd05a", platform === 'ios' && "tgui-2453b62de8016bfa", className),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(TypographyComponent, _object_spread._({
            Component: "textarea",
            className: "tgui-d40ec83150e66029",
            type: type
        }, restProps))
    });
};

//# sourceMappingURL=Textarea.js.map
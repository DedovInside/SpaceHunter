'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Input", {
    enumerable: true,
    get: function() {
        return Input;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _FormInput = require("../FormInput/FormInput");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const _Text = require("../../Typography/Text/Text");
const Input = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { type = 'text', header, before, after, status, className, disabled } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "header",
        "before",
        "after",
        "status",
        "className",
        "disabled"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const TypographyComponent = platform === 'ios' ? _Text.Text : _Subheadline.Subheadline;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_FormInput.FormInput, {
        header: header,
        before: before,
        after: after,
        status: status,
        disabled: disabled,
        className: (0, _classNames.classNames)("tgui-d9de1f32aee12a15", platform === 'ios' && "tgui-9b2ad13855aef059", className),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(TypographyComponent, _object_spread._({
            ref: ref,
            Component: "input",
            className: "tgui-c4863cd4c893a047",
            type: type,
            disabled: disabled
        }, restProps))
    });
});

//# sourceMappingURL=Input.js.map
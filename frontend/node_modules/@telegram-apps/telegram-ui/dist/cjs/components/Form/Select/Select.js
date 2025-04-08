'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Select", {
    enumerable: true,
    get: function() {
        return Select;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _chevron_down = require("../../../icons/20/chevron_down");
const _FormInput = require("../FormInput/FormInput");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const _Text = require("../../Typography/Text/Text");
const Select = (_param)=>{
    var { header, before, status, className } = _param, restProps = _object_without_properties._(_param, [
        "header",
        "before",
        "status",
        "className"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const TypographyComponent = platform === 'ios' ? _Text.Text : _Subheadline.Subheadline;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_FormInput.FormInput, {
        header: header,
        before: before,
        status: status,
        className: (0, _classNames.classNames)("tgui-919c5658483cae11", platform === 'ios' && "tgui-5edcb8465ee11055", className),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(TypographyComponent, _object_spread._({
                Component: "select",
                className: "tgui-a0742fd4c73756f7",
                multiple: false
            }, restProps)),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_chevron_down.Icon20ChevronDown, {
                "aria-hidden": true,
                className: "tgui-025a45d791e466f6"
            })
        ]
    });
};

//# sourceMappingURL=Select.js.map
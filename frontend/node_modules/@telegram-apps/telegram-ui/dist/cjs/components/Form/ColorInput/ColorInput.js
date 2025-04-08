'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColorInput", {
    enumerable: true,
    get: function() {
        return ColorInput;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _function = require("../../../helpers/function");
const _usePlatform = require("../../../hooks/usePlatform");
const _FormInput = require("../FormInput/FormInput");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const _Text = require("../../Typography/Text/Text");
const ColorInput = (_param)=>{
    var { header, before, status, value: valueProp, defaultValue, className, onChange: onChangeProp } = _param, restProps = _object_without_properties._(_param, [
        "header",
        "before",
        "status",
        "value",
        "defaultValue",
        "className",
        "onChange"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const [value, setValue] = (0, _react.useState)(valueProp || defaultValue || '#EFEFF4');
    (0, _react.useEffect)(()=>{
        if (!valueProp) {
            return;
        }
        setValue(valueProp);
    }, [
        valueProp
    ]);
    const onChange = (e)=>{
        setValue(e.target.value);
    };
    const TypographyComponent = platform === 'ios' ? _Text.Text : _Subheadline.Subheadline;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_FormInput.FormInput, {
        header: header,
        before: before,
        after: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "tgui-f3ab78c8048cb9dc",
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread._({
                    Component: "input",
                    type: "color",
                    value: value,
                    onChange: (0, _function.callMultiple)(onChange, onChangeProp)
                }, restProps)),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "tgui-93beab8699996b1e",
                    style: {
                        backgroundColor: String(value)
                    }
                })
            ]
        }),
        status: status,
        className: (0, _classNames.classNames)("tgui-a03137b1ed760aaf", platform === 'ios' && "tgui-ca1c0e2d013ae260", className),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(TypographyComponent, {
            caps: true,
            className: "tgui-21dba5277ef0ddd7",
            children: value
        })
    });
};

//# sourceMappingURL=ColorInput.js.map
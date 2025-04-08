"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Checkbox", {
    enumerable: true,
    get: function() {
        return Checkbox;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _VisuallyHidden = require("../../Service/VisuallyHidden/VisuallyHidden");
const _checkbox = require("./icons/checkbox");
const _checkbox_checked = require("./icons/checkbox_checked");
const _checkbox_indeterminate = require("./icons/checkbox_indeterminate");
const Checkbox = (_param)=>{
    var { style, className, disabled, indeterminate } = _param, restProps = _object_without_properties._(_param, [
        "style",
        "className",
        "disabled",
        "indeterminate"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("label", {
        className: (0, _classNames.classNames)("tgui-abbb25a9ce45033e", disabled && "tgui-6e9776e8c33b2626", className),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VisuallyHidden.VisuallyHidden, _object_spread_props._(_object_spread._({}, restProps), {
                Component: "input",
                type: "checkbox",
                className: "tgui-60cf4cc79ba44c4f",
                disabled: disabled
            })),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_checkbox.IconCheckbox, {
                className: "tgui-21b20ecaad17ccf9",
                "aria-hidden": true
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": true,
                className: "tgui-bca5056bf34297b0",
                children: indeterminate ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_checkbox_indeterminate.IconCheckboxIndeterminate, {}) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_checkbox_checked.IconCheckboxChecked, {})
            })
        ]
    });
};

//# sourceMappingURL=Checkbox.js.map
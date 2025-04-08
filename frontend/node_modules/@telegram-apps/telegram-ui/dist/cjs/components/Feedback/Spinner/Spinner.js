'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Spinner", {
    enumerable: true,
    get: function() {
        return Spinner;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _BaseSpinner = require("./components/BaseSpinner/BaseSpinner");
const _IOSSpinner = require("./components/IOSSpinner/IOSSpinner");
const sizeStyles = {
    s: "tgui-421d6dab8d2c78c1",
    m: "tgui-a636342f03bb5c08",
    l: "tgui-a53583a4b6d8fde0"
};
const Spinner = ({ size = 'm', className })=>{
    const platform = (0, _usePlatform.usePlatform)();
    const Component = platform === 'ios' ? _IOSSpinner.IOSSpinner : _BaseSpinner.BaseSpinner;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        role: "status",
        className: (0, _classNames.classNames)("tgui-0ac8c3540e603b63", platform === 'ios' && "tgui-562a3eae646b486d", sizeStyles[size], className),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            size: size
        })
    });
};

//# sourceMappingURL=Spinner.js.map
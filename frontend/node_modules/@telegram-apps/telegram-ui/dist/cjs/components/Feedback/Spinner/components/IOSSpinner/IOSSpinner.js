"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IOSSpinner", {
    enumerable: true,
    get: function() {
        return IOSSpinner;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _large = require("./icons/large");
const _medium = require("./icons/medium");
const _small = require("./icons/small");
const IOSSpinner = ({ size })=>{
    switch(size){
        case 'l':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_large.IconLarge, {});
        case 'm':
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_medium.IconMedium, {});
        default:
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_small.IconSmall, {});
    }
};

//# sourceMappingURL=IOSSpinner.js.map
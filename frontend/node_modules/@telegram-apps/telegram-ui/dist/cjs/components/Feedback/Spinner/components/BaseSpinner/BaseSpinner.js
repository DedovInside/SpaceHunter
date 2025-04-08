"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BaseSpinner", {
    enumerable: true,
    get: function() {
        return BaseSpinner;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _large = require("./icons/large");
const _medium = require("./icons/medium");
const _small = require("./icons/small");
const componentBySize = {
    s: _small.IconSmall,
    m: _medium.IconMedium,
    l: _large.IconLarge
};
const rotateCenterBySize = {
    s: 12,
    m: 18,
    l: 22
};
const BaseSpinner = ({ size })=>{
    const Component = componentBySize[size];
    const rotateCenter = rotateCenterBySize[size];
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("animateTransform", {
            attributeName: "transform",
            attributeType: "XML",
            type: "rotate",
            from: `0 ${rotateCenter} ${rotateCenter}`,
            to: `360 ${rotateCenter} ${rotateCenter}`,
            dur: "0.7s",
            repeatCount: "indefinite"
        })
    });
};

//# sourceMappingURL=BaseSpinner.js.map
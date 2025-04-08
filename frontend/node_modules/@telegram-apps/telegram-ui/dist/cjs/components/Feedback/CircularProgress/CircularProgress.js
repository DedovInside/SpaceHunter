"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CircularProgress", {
    enumerable: true,
    get: function() {
        return CircularProgress;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _getCircleAttributes = require("./helpers/getCircleAttributes");
const CircularProgress = ({ size = 'medium', progress = 0 })=>{
    const circleAttributes = (0, _getCircleAttributes.getCircleAttributes)(size);
    if (!circleAttributes) {
        return null;
    }
    const circumference = 2 * Math.PI * circleAttributes.radius;
    const circleSize = circleAttributes.size / 2;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        className: "tgui-81a5164cd16c05d5",
        width: circleAttributes.size,
        height: circleAttributes.size,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("circle", {
                cx: circleSize,
                cy: circleSize,
                r: circleAttributes.radius,
                strokeOpacity: ".1",
                strokeWidth: circleAttributes.strokeWidth,
                fill: "none"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("circle", {
                fill: "none",
                cx: circleSize,
                cy: circleSize,
                r: circleAttributes.radius,
                strokeWidth: circleAttributes.strokeWidth,
                strokeLinecap: "round",
                strokeDasharray: circumference,
                strokeDashoffset: circumference * ((100 - progress) / 100)
            })
        ]
    });
};

//# sourceMappingURL=CircularProgress.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Ripple", {
    enumerable: true,
    get: function() {
        return Ripple;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const Ripple = ({ clicks })=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        "aria-hidden": true,
        className: "tgui-8071f6e38c77bc0b",
        children: clicks.map((wave)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "tgui-e156954daf886976",
                style: {
                    top: wave.y,
                    left: wave.x
                }
            }, wave.date))
    });

//# sourceMappingURL=Ripple.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Steps", {
    enumerable: true,
    get: function() {
        return Steps;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const Steps = ({ className, count, progress })=>/*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: (0, _classNames.classNames)("tgui-f492b616576c67fb", className),
        children: Array.from({
            length: count
        }, (_, i)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: (0, _classNames.classNames)("tgui-d45985ba4cb27e5f", {
                    ["tgui-352b8d247f473986"]: i < progress
                })
            }, i))
    });

//# sourceMappingURL=Steps.js.map
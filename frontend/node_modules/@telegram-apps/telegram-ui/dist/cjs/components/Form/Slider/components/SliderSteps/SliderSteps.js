'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SliderSteps", {
    enumerable: true,
    get: function() {
        return SliderSteps;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const SliderSteps = ({ steps })=>{
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: steps.map(({ isPassed, XCoordinate })=>/*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: (0, _classNames.classNames)("tgui-b632646f586ff14d", {
                    ["tgui-7951a89b824476b3"]: platform === 'ios',
                    ["tgui-2b0a006b5a9ffd68"]: isPassed
                }),
                style: {
                    left: `${XCoordinate}%`
                }
            }, XCoordinate))
    });
};

//# sourceMappingURL=SliderSteps.js.map
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Progress", {
    enumerable: true,
    get: function() {
        return Progress;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _math = require("../../../helpers/math");
const _usePlatform = require("../../../hooks/usePlatform");
const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;
const Progress = (_param)=>{
    var { value = 0, className } = _param, restProps = _object_without_properties._(_param, [
        "value",
        "className"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const progress = (0, _math.clamp)(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
    const title = `${progress} / ${PROGRESS_MAX_VALUE}`;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        title: title,
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemin": PROGRESS_MIN_VALUE,
        "aria-valuemax": PROGRESS_MAX_VALUE,
        className: (0, _classNames.classNames)("tgui-ced47fd163a53511", platform === 'base' && "tgui-44060f289fdbdb84", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            "aria-hidden": true,
            className: "tgui-027278a6d6708965",
            style: {
                width: `${progress}%`
            }
        })
    }));
};

//# sourceMappingURL=Progress.js.map
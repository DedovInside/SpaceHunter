"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_ARROW_HEIGHT: function() {
        return DEFAULT_ARROW_HEIGHT;
    },
    DEFAULT_ARROW_PADDING: function() {
        return DEFAULT_ARROW_PADDING;
    },
    DEFAULT_ARROW_WIDTH: function() {
        return DEFAULT_ARROW_WIDTH;
    },
    DefaultIcon: function() {
        return DefaultIcon;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _jsxruntime = require("react/jsx-runtime");
const DEFAULT_ARROW_WIDTH = 22;
const DEFAULT_ARROW_HEIGHT = 6;
const DEFAULT_ARROW_PADDING = 12;
const PLATFORM_HEIGHT = 1;
const ARROW_HEIGHT_WITH_WHITE_SPACE = DEFAULT_ARROW_HEIGHT + PLATFORM_HEIGHT;
const DefaultIcon = (props)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("svg", _object_spread_props._(_object_spread._({
        width: DEFAULT_ARROW_WIDTH,
        height: ARROW_HEIGHT_WITH_WHITE_SPACE,
        viewBox: `0 0 ${DEFAULT_ARROW_WIDTH} ${ARROW_HEIGHT_WITH_WHITE_SPACE}`,
        xmlns: "http://www.w3.org/2000/svg"
    }, props), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M10.804 0C6.387 0 6.94 6 .865 6h19.878c-6.074 0-5.521-6-9.939-6Z",
            fill: "currentColor"
        })
    }));

//# sourceMappingURL=arrow.js.map
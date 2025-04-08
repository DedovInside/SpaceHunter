"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var sdk_1 = require("../../sdk");
var defaultBottomBarColor = (_a = sdk_1.WebApp.themeParams.bottom_bar_bg_color) !== null && _a !== void 0 ? _a : sdk_1.WebApp.themeParams.secondary_bg_color;
var BottomBar = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? defaultBottomBarColor : _b, _c = _a.children, children = _c === void 0 ? null : _c;
    (0, react_1.useEffect)(function () {
        sdk_1.WebApp.setBottomBarColor(bgColor);
    }, [bgColor]);
    (0, react_1.useEffect)(function () {
        return function () {
            sdk_1.WebApp.setBottomBarColor(defaultBottomBarColor);
        };
    }, []);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.BottomBar = BottomBar;
//# sourceMappingURL=BottomBar.js.map
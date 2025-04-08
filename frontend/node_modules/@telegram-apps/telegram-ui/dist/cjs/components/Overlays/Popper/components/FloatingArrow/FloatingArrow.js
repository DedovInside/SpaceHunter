"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FloatingArrow", {
    enumerable: true,
    get: function() {
        return FloatingArrow;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _getArrowPositionData = require("./helpers/getArrowPositionData");
const _arrow = require("./icons/arrow");
const placementStyles = {
    right: "tgui-6c3deae89ec68e99",
    bottom: "tgui-fed67e27ad8cb75f",
    left: "tgui-b27d1c4f6222569e"
};
const FloatingArrow = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { style, offset, isStaticOffset, coords, placement = 'bottom', Icon = _arrow.DefaultIcon, className } = _param, restProps = _object_without_properties._(_param, [
        "style",
        "offset",
        "isStaticOffset",
        "coords",
        "placement",
        "Icon",
        "className"
    ]);
    const [arrowPlacement, arrowStyles] = (0, _getArrowPositionData.getArrowPositionData)(placement, coords, offset, isStaticOffset);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        ref: ref,
        style: _object_spread._({}, arrowStyles, style),
        className: (0, _classNames.classNames)("tgui-97a62789a70393d0", arrowPlacement && placementStyles[arrowPlacement], className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Icon, {
            className: "tgui-6ae8c47f9448321b"
        })
    }));
});

//# sourceMappingURL=FloatingArrow.js.map
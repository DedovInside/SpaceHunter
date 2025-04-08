"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Badge", {
    enumerable: true,
    get: function() {
        return Badge;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _Caption = require("../../Typography/Caption/Caption");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const typeStyles = {
    number: "tgui-562f7459d74103ea",
    dot: "tgui-4f69ed647e40e245"
};
const modeStyles = {
    primary: "tgui-6e63faaa2b33f4ae",
    critical: "tgui-4b52474c713ffa7c",
    secondary: "tgui-0278f262d68294f0",
    gray: "tgui-0883e451f3707277",
    white: "tgui-6b3dbcedd9052940"
};
const Badge = (_param)=>{
    var { type, mode = 'primary', large, className, children } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "mode",
        "large",
        "className",
        "children"
    ]);
    const isNumber = type === 'number';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-c8f4bcd1606fb026", typeStyles[type], modeStyles[mode], isNumber && large && "tgui-c1a5e9170826a773", className)
    }, restProps), {
        children: (0, _node.hasReactNode)(children) && isNumber && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                large && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                    Component: "span",
                    level: "2",
                    weight: "2",
                    children: children
                }),
                !large && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
                    weight: "2",
                    children: children
                })
            ]
        })
    }));
};

//# sourceMappingURL=Badge.js.map
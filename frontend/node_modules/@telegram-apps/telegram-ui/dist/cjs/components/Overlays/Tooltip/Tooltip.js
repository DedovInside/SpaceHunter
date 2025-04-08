"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Tooltip", {
    enumerable: true,
    get: function() {
        return Tooltip;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _Popper = require("../Popper/Popper");
const _Caption = require("../../Typography/Caption/Caption");
const Tooltip = (_param)=>{
    var { mode = 'light', children, className, arrowProps } = _param, restProps = _object_without_properties._(_param, [
        "mode",
        "children",
        "className",
        "arrowProps"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Popper.Popper, _object_spread_props._(_object_spread._({
        withArrow: true,
        arrowProps: _object_spread_props._(_object_spread._({}, arrowProps), {
            className: (0, _classNames.classNames)("tgui-e0107e1e5ea5b9f3", arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.className)
        }),
        className: (0, _classNames.classNames)("tgui-5638a4ef4e806d8c", mode === 'dark' && "tgui-bc60ca772e3ae3c6", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
            level: "1",
            children: children
        })
    }));
};

//# sourceMappingURL=Tooltip.js.map
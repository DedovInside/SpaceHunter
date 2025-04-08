"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SnackbarButton", {
    enumerable: true,
    get: function() {
        return SnackbarButton;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _Tappable = require("../../../../Service/Tappable/Tappable");
const SnackbarButton = (_param)=>{
    var { className, children } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        Component: "button",
        className: (0, _classNames.classNames)("tgui-4d26fba7185ffa9f", className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=SnackbarButton.js.map
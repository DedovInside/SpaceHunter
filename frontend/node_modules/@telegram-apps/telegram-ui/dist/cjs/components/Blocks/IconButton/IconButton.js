"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconButton", {
    enumerable: true,
    get: function() {
        return IconButton;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _Tappable = require("../../Service/Tappable/Tappable");
const modeStyles = {
    bezeled: "tgui-93cba8aff2e72079",
    plain: "tgui-08ef1486bc111162",
    gray: "tgui-2250ff52f0b5cf71",
    outline: "tgui-53781f3cf83e8be1"
};
const sizeStyles = {
    s: "tgui-b92d762e02762017",
    m: "tgui-024dfe77a8f2cfb0",
    l: "tgui-8ca1879e1128c105"
};
const IconButton = (_param)=>{
    var { size = 'm', mode = 'bezeled', className, children } = _param, restProps = _object_without_properties._(_param, [
        "size",
        "mode",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        Component: "button",
        className: (0, _classNames.classNames)("tgui-dda0e80fdf796ba5", modeStyles[mode], sizeStyles[size], className)
    }, restProps), {
        children: children
    }));
};

//# sourceMappingURL=IconButton.js.map
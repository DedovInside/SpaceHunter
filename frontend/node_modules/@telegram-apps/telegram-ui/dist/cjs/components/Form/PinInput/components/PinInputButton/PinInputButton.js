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
    ButtonTypography: function() {
        return ButtonTypography;
    },
    PinInputButton: function() {
        return PinInputButton;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Tappable = require("../../../../Service/Tappable/Tappable");
const _LargeTitle = require("../../../../Typography/LargeTitle/LargeTitle");
const _Title = require("../../../../Typography/Title/Title");
const ButtonTypography = (props)=>{
    const platform = (0, _usePlatform.usePlatform)();
    if (platform === 'ios') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_LargeTitle.LargeTitle, _object_spread._({}, props));
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Title.Title, _object_spread._({}, props));
};
const PinInputButton = (_param)=>{
    var { children } = _param, restProps = _object_without_properties._(_param, [
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        Component: "button",
        className: (0, _classNames.classNames)("tgui-6eaa561b38208c72", platform === 'ios' && "tgui-3bea52c968cee224")
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ButtonTypography, {
            children: children
        })
    }));
};

//# sourceMappingURL=PinInputButton.js.map
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Tabbar", {
    enumerable: true,
    get: function() {
        return Tabbar;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _FixedLayout = require("../FixedLayout/FixedLayout");
const _TabbarItem = require("./components/TabbarItem/TabbarItem");
const Tabbar = (_param)=>{
    var { children, className } = _param, restProps = _object_without_properties._(_param, [
        "children",
        "className"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_FixedLayout.FixedLayout, _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-53cb2ebed0c3b08f", platform === 'ios' && "tgui-a2b4713d67582227", className)
    }, restProps), {
        children: children
    }));
};
Tabbar.Item = _TabbarItem.TabbarItem;

//# sourceMappingURL=Tabbar.js.map
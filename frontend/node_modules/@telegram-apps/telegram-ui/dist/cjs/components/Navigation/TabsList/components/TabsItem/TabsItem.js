'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TabsItem", {
    enumerable: true,
    get: function() {
        return TabsItem;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Tappable = require("../../../../Service/Tappable/Tappable");
const _Text = require("../../../../Typography/Text/Text");
const TabsItem = (_param)=>{
    var { selected, className, children } = _param, restProps = _object_without_properties._(_param, [
        "selected",
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const iosWeight = selected ? '1' : '2';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        role: "tab",
        Component: "button",
        className: (0, _classNames.classNames)("tgui-96892ceed80c1bf3", selected && "tgui-44ea091aea23df33", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, {
            weight: platform === 'ios' ? iosWeight : '2',
            children: children
        })
    }));
};

//# sourceMappingURL=TabsItem.js.map
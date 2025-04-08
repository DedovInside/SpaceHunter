'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SegmentedControlItem", {
    enumerable: true,
    get: function() {
        return SegmentedControlItem;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Tappable = require("../../../../Service/Tappable/Tappable");
const _Caption = require("../../../../Typography/Caption/Caption");
const SegmentedControlItem = (_param)=>{
    var { selected, className, children } = _param, restProps = _object_without_properties._(_param, [
        "selected",
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        role: "tab",
        Component: "button",
        className: (0, _classNames.classNames)("tgui-bbfb272d22eb23e8", platform === 'ios' && "tgui-513fce1023cbbd63", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
            weight: selected ? '2' : '3',
            children: children
        })
    }));
};

//# sourceMappingURL=SegmentedControlItem.js.map
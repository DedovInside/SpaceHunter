'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TabbarItem", {
    enumerable: true,
    get: function() {
        return TabbarItem;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _node = require("../../../../../helpers/react/node");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Tappable = require("../../../../Service/Tappable/Tappable");
const _Caption = require("../../../../Typography/Caption/Caption");
const TabbarItem = (_param)=>{
    var { selected, text, children, className } = _param, restProps = _object_without_properties._(_param, [
        "selected",
        "text",
        "children",
        "className"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        Component: "button",
        interactiveAnimation: "opacity",
        className: (0, _classNames.classNames)("tgui-64cd0db020a9bacf", platform === 'ios' && "tgui-ecbb746748ea4134", selected && "tgui-e6658d0b8927f95e", className)
    }, restProps), {
        children: [
            (0, _node.hasReactNode)(children) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-44d48e11585af170",
                children: children
            }),
            (0, _node.hasReactNode)(text) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
                className: "tgui-aeab497081949a15",
                weight: "2",
                level: platform === 'ios' ? '2' : '1',
                children: text
            })
        ]
    }));
};

//# sourceMappingURL=TabbarItem.js.map
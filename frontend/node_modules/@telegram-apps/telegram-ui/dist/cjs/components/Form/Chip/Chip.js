'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Chip", {
    enumerable: true,
    get: function() {
        return Chip;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _Tappable = require("../../Service/Tappable/Tappable");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const modeStyles = {
    elevated: "tgui-b8b077d7e3491b30",
    mono: "tgui-ccc3e4a302799418",
    outline: "tgui-fdfccf8f92c11530"
};
const Chip = (_param)=>{
    var { mode = 'elevated', before, after, className, children, Component = 'div' } = _param, restProps = _object_without_properties._(_param, [
        "mode",
        "before",
        "after",
        "className",
        "children",
        "Component"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        Component: Component,
        interactiveAnimation: "opacity",
        className: (0, _classNames.classNames)("tgui-6372c64c79ad2959", modeStyles[mode], className)
    }, restProps), {
        children: [
            (0, _node.hasReactNode)(before) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-0d7ce20ebc0fc7aa",
                children: before
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                className: "tgui-9c7ff8cd23a6ea9a",
                level: platform === 'ios' ? '2' : '1',
                weight: "2",
                children: children
            }),
            (0, _node.hasReactNode)(after) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-67f596882eb2b6ab",
                children: after
            })
        ]
    }));
};

//# sourceMappingURL=Chip.js.map
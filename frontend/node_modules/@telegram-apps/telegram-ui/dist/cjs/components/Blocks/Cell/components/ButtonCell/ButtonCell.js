'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ButtonCell", {
    enumerable: true,
    get: function() {
        return ButtonCell;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _node = require("../../../../../helpers/react/node");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _Tappable = require("../../../../Service/Tappable/Tappable");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const _Text = require("../../../../Typography/Text/Text");
const ButtonCell = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { mode = 'default', before, after, className, children, Component } = _param, restProps = _object_without_properties._(_param, [
        "mode",
        "before",
        "after",
        "className",
        "children",
        "Component"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const Typography = platform === 'ios' ? _Subheadline.Subheadline : _Text.Text;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        ref: ref,
        Component: Component || 'button',
        className: (0, _classNames.classNames)("tgui-a8ce18a8594cea9b", mode === 'destructive' && "tgui-6e7ca796043fe6ca", platform === 'ios' && "tgui-f464dba82cb8b46e", className)
    }, restProps), {
        children: [
            (0, _node.hasReactNode)(before) && before,
            (0, _node.hasReactNode)(children) && /*#__PURE__*/ (0, _jsxruntime.jsx)(Typography, {
                children: children
            }),
            (0, _node.hasReactNode)(after) && after
        ]
    }));
});

//# sourceMappingURL=ButtonCell.js.map
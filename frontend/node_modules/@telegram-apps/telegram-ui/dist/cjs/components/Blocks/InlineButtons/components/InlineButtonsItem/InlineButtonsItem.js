'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InlineButtonsItem", {
    enumerable: true,
    get: function() {
        return InlineButtonsItem;
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
const _Caption = require("../../../../Typography/Caption/Caption");
const _InlineButtonsContext = require("../../InlineButtonsContext");
const modeStyles = {
    bezeled: "tgui-99a630d0096f2169",
    gray: "tgui-30bf4976f818e8bf"
};
const InlineButtonsItem = (_param)=>{
    var { mode: propsMode = 'plain', className, text, children } = _param, restProps = _object_without_properties._(_param, [
        "mode",
        "className",
        "text",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const { mode: inheritMode } = (0, _react.useContext)(_InlineButtonsContext.InlineButtonsContext);
    const mode = inheritMode || propsMode;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        Component: "button",
        className: (0, _classNames.classNames)("tgui-c5545e0bc6105e48", platform === 'ios' && "tgui-bf32cd3c110b8729", mode !== 'plain' && modeStyles[mode], className)
    }, restProps), {
        children: [
            children,
            (0, _node.hasReactNode)(text) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Caption.Caption, {
                className: "tgui-c0c9bf3b1a53a8a4",
                level: "1",
                weight: "2",
                children: text
            })
        ]
    }));
};

//# sourceMappingURL=InlineButtonsItem.js.map
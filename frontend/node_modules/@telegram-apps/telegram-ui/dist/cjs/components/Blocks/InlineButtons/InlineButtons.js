'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InlineButtons", {
    enumerable: true,
    get: function() {
        return InlineButtons;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _useObjectMemo = require("../../../hooks/useObjectMemo");
const _usePlatform = require("../../../hooks/usePlatform");
const _InlineButtonsItem = require("./components/InlineButtonsItem/InlineButtonsItem");
const _InlineButtonsContext = require("./InlineButtonsContext");
const InlineButtons = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { mode, className, children } = _param, restProps = _object_without_properties._(_param, [
        "mode",
        "className",
        "children"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const contextValue = (0, _useObjectMemo.useObjectMemo)({
        mode
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        ref: ref,
        className: (0, _classNames.classNames)("tgui-39e9f02ce4b4b950", platform === 'ios' && "tgui-b3d7f75461a64b76", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_InlineButtonsContext.InlineButtonsContext.Provider, {
            value: contextValue,
            children: children
        })
    }));
});
InlineButtons.Item = _InlineButtonsItem.InlineButtonsItem;

//# sourceMappingURL=InlineButtons.js.map
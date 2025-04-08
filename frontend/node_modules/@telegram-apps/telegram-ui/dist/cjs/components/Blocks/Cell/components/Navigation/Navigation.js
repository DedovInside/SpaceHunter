'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Navigation", {
    enumerable: true,
    get: function() {
        return Navigation;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _node = require("../../../../../helpers/react/node");
const _usePlatform = require("../../../../../hooks/usePlatform");
const _chevron = require("../../../../../icons/16/chevron");
const _Text = require("../../../../Typography/Text/Text");
const Navigation = ({ className, children })=>{
    const platform = (0, _usePlatform.usePlatform)();
    const hasChildren = (0, _node.hasReactNode)(children);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: (0, _classNames.classNames)("tgui-97dd747d03e9d3e0", className),
        children: [
            hasChildren && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, {
                className: "tgui-64a5a0dc5509605e",
                children: children
            }),
            (!hasChildren || platform === 'ios') && /*#__PURE__*/ (0, _jsxruntime.jsx)(_chevron.Icon16Chevron, {
                className: "tgui-3b026a2674eb3f4c"
            })
        ]
    });
};

//# sourceMappingURL=Navigation.js.map
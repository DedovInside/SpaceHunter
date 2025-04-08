'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Cell", {
    enumerable: true,
    get: function() {
        return Cell;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _Tappable = require("../../Service/Tappable/Tappable");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const _useTypographyCellComponents = require("./hooks/useTypographyCellComponents");
const Cell = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { children, titleBadge, hint, subhead, subtitle, description, className, before, after, Component, hovered, multiline } = _param, restProps = _object_without_properties._(_param, [
        "children",
        "titleBadge",
        "hint",
        "subhead",
        "subtitle",
        "description",
        "className",
        "before",
        "after",
        "Component",
        "hovered",
        "multiline"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const { Title, Description } = (0, _useTypographyCellComponents.useTypographyCellComponents)();
    const hasTitle = (0, _node.hasReactNode)(children) || (0, _node.hasReactNode)(hint) || (0, _node.hasReactNode)(titleBadge);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Tappable.Tappable, _object_spread_props._(_object_spread._({
        ref: ref,
        Component: Component || 'div',
        className: (0, _classNames.classNames)("tgui-b8dfba0b5c3d054c", platform === 'ios' && "tgui-7b5bccbb645b495f", hovered && "tgui-7edaaf0c57797623", multiline && "tgui-6c49dadccf648a5b", className)
    }, restProps), {
        children: [
            (0, _node.hasReactNode)(before) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-aaa795d78c356ac1",
                children: before
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "tgui-8735a62be5a8b8a7",
                children: [
                    (0, _node.hasReactNode)(subhead) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                        className: "tgui-46dd90b57ffed25f",
                        level: "2",
                        weight: "3",
                        children: subhead
                    }),
                    hasTitle && /*#__PURE__*/ (0, _jsxruntime.jsxs)(Title, {
                        className: "tgui-a894f59f4c5ad72f",
                        children: [
                            (0, _node.hasReactNode)(children) && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                className: "tgui-1c6d7865a76a19bc",
                                children: children
                            }),
                            (0, _node.hasReactNode)(hint) && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                className: "tgui-bb909928b48f948b",
                                children: hint
                            }),
                            (0, _node.hasReactNode)(titleBadge) && titleBadge
                        ]
                    }),
                    (0, _node.hasReactNode)(subtitle) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                        className: "tgui-d528ef65a8b76273",
                        level: "2",
                        weight: "3",
                        children: subtitle
                    }),
                    (0, _node.hasReactNode)(description) && /*#__PURE__*/ (0, _jsxruntime.jsx)(Description, {
                        className: "tgui-fc059ed3ac5799a6",
                        children: description
                    })
                ]
            }),
            (0, _node.hasReactNode)(after) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-56b2e897ed7ccb22",
                children: after
            })
        ]
    }));
});

//# sourceMappingURL=Cell.js.map
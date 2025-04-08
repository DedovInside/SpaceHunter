'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { hasReactNode } from "../../../helpers/react/node";
import { usePlatform } from "../../../hooks/usePlatform";
import { Tappable } from "../../Service/Tappable/Tappable";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
import { useTypographyCellComponents } from "./hooks/useTypographyCellComponents";
/**
 * `Cell` component acts as a flexible and interactive container for various types of content,
 * enabling the creation of complex list items, form fields, and more. It leverages the `Tappable`
 * component for interaction and is designed to be flexible and extensible.
 */ export const Cell = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { children, titleBadge, hint, subhead, subtitle, description, className, before, after, Component, hovered, multiline } = _param, restProps = _object_without_properties(_param, [
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
    const platform = usePlatform();
    const { Title, Description } = useTypographyCellComponents();
    const hasTitle = hasReactNode(children) || hasReactNode(hint) || hasReactNode(titleBadge);
    return /*#__PURE__*/ _jsxs(Tappable, _object_spread_props(_object_spread({
        ref: ref,
        Component: Component || 'div',
        className: classNames("tgui-b8dfba0b5c3d054c", platform === 'ios' && "tgui-7b5bccbb645b495f", hovered && "tgui-7edaaf0c57797623", multiline && "tgui-6c49dadccf648a5b", className)
    }, restProps), {
        children: [
            hasReactNode(before) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-aaa795d78c356ac1",
                children: before
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tgui-8735a62be5a8b8a7",
                children: [
                    hasReactNode(subhead) && /*#__PURE__*/ _jsx(Subheadline, {
                        className: "tgui-46dd90b57ffed25f",
                        level: "2",
                        weight: "3",
                        children: subhead
                    }),
                    hasTitle && /*#__PURE__*/ _jsxs(Title, {
                        className: "tgui-a894f59f4c5ad72f",
                        children: [
                            hasReactNode(children) && /*#__PURE__*/ _jsx("span", {
                                className: "tgui-1c6d7865a76a19bc",
                                children: children
                            }),
                            hasReactNode(hint) && /*#__PURE__*/ _jsx("span", {
                                className: "tgui-bb909928b48f948b",
                                children: hint
                            }),
                            hasReactNode(titleBadge) && titleBadge
                        ]
                    }),
                    hasReactNode(subtitle) && /*#__PURE__*/ _jsx(Subheadline, {
                        className: "tgui-d528ef65a8b76273",
                        level: "2",
                        weight: "3",
                        children: subtitle
                    }),
                    hasReactNode(description) && /*#__PURE__*/ _jsx(Description, {
                        className: "tgui-fc059ed3ac5799a6",
                        children: description
                    })
                ]
            }),
            hasReactNode(after) && /*#__PURE__*/ _jsx("div", {
                className: "tgui-56b2e897ed7ccb22",
                children: after
            })
        ]
    }));
});

//# sourceMappingURL=Cell.js.map
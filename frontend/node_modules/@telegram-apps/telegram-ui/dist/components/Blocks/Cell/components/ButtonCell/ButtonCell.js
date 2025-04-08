'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { hasReactNode } from "../../../../../helpers/react/node";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Tappable } from "../../../../Service/Tappable/Tappable";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
import { Text } from "../../../../Typography/Text/Text";
/**
 * Renders an interactive cell component with optional leading and trailing elements. Designed to be flexible,
 * supporting various content structures and interaction models within UI designs.
 */ export const ButtonCell = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { mode = 'default', before, after, className, children, Component } = _param, restProps = _object_without_properties(_param, [
        "mode",
        "before",
        "after",
        "className",
        "children",
        "Component"
    ]);
    const platform = usePlatform();
    const Typography = platform === 'ios' ? Subheadline : Text;
    return /*#__PURE__*/ _jsxs(Tappable, _object_spread_props(_object_spread({
        ref: ref,
        Component: Component || 'button',
        className: classNames("tgui-a8ce18a8594cea9b", mode === 'destructive' && "tgui-6e7ca796043fe6ca", platform === 'ios' && "tgui-f464dba82cb8b46e", className)
    }, restProps), {
        children: [
            hasReactNode(before) && before,
            hasReactNode(children) && /*#__PURE__*/ _jsx(Typography, {
                children: children
            }),
            hasReactNode(after) && after
        ]
    }));
});

//# sourceMappingURL=ButtonCell.js.map
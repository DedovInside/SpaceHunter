'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { hasReactNode } from "../../../../../helpers/react/node";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Icon16Chevron } from "../../../../../icons/16/chevron";
import { Text } from "../../../../Typography/Text/Text";
/**
 * Renders a navigation element with optional text content and an icon. The presence of the icon is
 * dependent on the content and the platform, providing flexibility for different UI scenarios.
 */ export const Navigation = ({ className, children })=>{
    const platform = usePlatform();
    const hasChildren = hasReactNode(children);
    return /*#__PURE__*/ _jsxs("div", {
        className: classNames("tgui-97dd747d03e9d3e0", className),
        children: [
            hasChildren && /*#__PURE__*/ _jsx(Text, {
                className: "tgui-64a5a0dc5509605e",
                children: children
            }),
            (!hasChildren || platform === 'ios') && /*#__PURE__*/ _jsx(Icon16Chevron, {
                className: "tgui-3b026a2674eb3f4c"
            })
        ]
    });
};

//# sourceMappingURL=Navigation.js.map
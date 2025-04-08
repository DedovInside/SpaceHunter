'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { hasReactNode } from "../../../../../helpers/react/node";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Tappable } from "../../../../Service/Tappable/Tappable";
import { Caption } from "../../../../Typography/Caption/Caption";
import { InlineButtonsContext } from "../../InlineButtonsContext";
const modeStyles = {
    bezeled: "tgui-99a630d0096f2169",
    gray: "tgui-30bf4976f818e8bf"
};
/**
 * `InlineButtons.Item` is designed for use within an InlineButtons container but can also serve as a standalone button
 * if used by itself. It supports displaying optional text and can inherit a styling mode from its parent InlineButtons
 * context or utilize a locally defined mode. This flexibility allows it to seamlessly integrate within various layouts
 * and designs, providing a consistent and adaptable interface element.
 */ export const InlineButtonsItem = (_param)=>{
    var { mode: propsMode = 'plain', className, text, children } = _param, restProps = _object_without_properties(_param, [
        "mode",
        "className",
        "text",
        "children"
    ]);
    const platform = usePlatform();
    const { mode: inheritMode } = useContext(InlineButtonsContext);
    const mode = inheritMode || propsMode;
    return /*#__PURE__*/ _jsxs(Tappable, _object_spread_props(_object_spread({
        Component: "button",
        className: classNames("tgui-c5545e0bc6105e48", platform === 'ios' && "tgui-bf32cd3c110b8729", mode !== 'plain' && modeStyles[mode], className)
    }, restProps), {
        children: [
            children,
            hasReactNode(text) && /*#__PURE__*/ _jsx(Caption, {
                className: "tgui-c0c9bf3b1a53a8a4",
                level: "1",
                weight: "2",
                children: text
            })
        ]
    }));
};

//# sourceMappingURL=InlineButtonsItem.js.map
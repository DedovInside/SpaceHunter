'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { useObjectMemo } from "../../../hooks/useObjectMemo";
import { usePlatform } from "../../../hooks/usePlatform";
import { InlineButtonsItem } from "./components/InlineButtonsItem/InlineButtonsItem";
import { InlineButtonsContext } from "./InlineButtonsContext";
/**
 * `InlineButtons` acts as a container for `InlineButtons.Item` components. This component
 * provides a unified context for styling and interaction, leveraging the `mode` to apply
 * consistent styling across all child components. It ensures visual consistency across different
 * platforms and supports custom styling modes.
 */ export const InlineButtons = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { mode, className, children } = _param, restProps = _object_without_properties(_param, [
        "mode",
        "className",
        "children"
    ]);
    const platform = usePlatform();
    const contextValue = useObjectMemo({
        mode
    });
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        ref: ref,
        className: classNames("tgui-39e9f02ce4b4b950", platform === 'ios' && "tgui-b3d7f75461a64b76", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(InlineButtonsContext.Provider, {
            value: contextValue,
            children: children
        })
    }));
});
InlineButtons.Item = InlineButtonsItem;

//# sourceMappingURL=InlineButtons.js.map
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { useObjectMemo } from "../../../hooks/useObjectMemo";
import { CardCell } from "./components/CardCell/CardCell";
import { CardChip } from "./components/CardChip/CardChip";
import { CardContext } from "./CardContext";
/**
 * Serves as a container for card-styled UI elements, providing context for its child components.
 * It supports different visual styles and can encapsulate various content types.
 */ export const Card = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { type = 'plain', className, children } = _param, restProps = _object_without_properties(_param, [
        "type",
        "className",
        "children"
    ]);
    const contextValue = useObjectMemo({
        type
    });
    return /*#__PURE__*/ _jsx(CardContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ _jsx("article", _object_spread_props(_object_spread({
            ref: ref,
            className: classNames("tgui-dbf261f4b3046bb3", type === 'ambient' && "tgui-c6ad96fdf8ce4b28", className)
        }, restProps), {
            children: children
        }))
    });
});
Card.Cell = CardCell;
Card.Chip = CardChip;

//# sourceMappingURL=Card.js.map
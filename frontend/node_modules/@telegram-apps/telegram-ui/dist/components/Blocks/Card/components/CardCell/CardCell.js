import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { hasReactNode } from "../../../../../helpers/react/node";
import { Cell } from "../../../Cell/Cell";
import { CardContext } from "../../CardContext";
export const CardCell = (_param)=>{
    var { children, subtitle, className } = _param, restProps = _object_without_properties(_param, [
        "children",
        "subtitle",
        "className"
    ]);
    const cardContext = useContext(CardContext);
    return /*#__PURE__*/ _jsx(Cell, _object_spread_props(_object_spread({
        className: classNames("tgui-80c6a0ba7b3c11fd", cardContext.type === 'ambient' && "tgui-814d1971a92687e3", className),
        subtitle: hasReactNode(subtitle) && /*#__PURE__*/ _jsx("span", {
            className: "tgui-422c21c917cc0873",
            children: subtitle
        })
    }, restProps), {
        children: hasReactNode(children) && /*#__PURE__*/ _jsx("span", {
            className: "tgui-27c5a061c5f35c04",
            children: children
        })
    }));
};

//# sourceMappingURL=CardCell.js.map
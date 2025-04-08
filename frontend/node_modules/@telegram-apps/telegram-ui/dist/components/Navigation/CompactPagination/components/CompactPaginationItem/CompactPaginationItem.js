import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { hasReactNode } from "../../../../../helpers/react/node";
import { VisuallyHidden } from "../../../../Service/VisuallyHidden/VisuallyHidden";
export const CompactPaginationItem = (_param)=>{
    var { selected, className, children } = _param, restProps = _object_without_properties(_param, [
        "selected",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsx("button", _object_spread_props(_object_spread({
        type: "button",
        role: "tab",
        "aria-selected": selected,
        className: classNames("tgui-747563e660315b07", selected && "tgui-6d14364fac453a65", className)
    }, restProps), {
        children: hasReactNode(children) ? /*#__PURE__*/ _jsx(VisuallyHidden, {
            children: children
        }) : undefined
    }));
};

//# sourceMappingURL=CompactPaginationItem.js.map
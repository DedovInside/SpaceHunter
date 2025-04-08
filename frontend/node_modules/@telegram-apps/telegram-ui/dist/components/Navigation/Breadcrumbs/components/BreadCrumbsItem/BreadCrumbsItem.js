import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
export const BreadCrumbsItem = (_param)=>{
    var { Component = 'div', className, children } = _param, restProps = _object_without_properties(_param, [
        "Component",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsx(Component, _object_spread_props(_object_spread({
        className: classNames("tgui-32fe6ce00169d72e", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(Subheadline, {
            level: "2",
            weight: "2",
            children: children
        })
    }));
};

//# sourceMappingURL=BreadCrumbsItem.js.map
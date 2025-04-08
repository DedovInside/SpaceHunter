import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
export const VisuallyHidden = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { Component = 'span', className } = _param, restProps = _object_without_properties(_param, [
        "Component",
        "className"
    ]);
    return /*#__PURE__*/ _jsx(Component, _object_spread_props(_object_spread({}, restProps), {
        ref: ref,
        className: classNames("tgui-b9fd8cdf929947df", className)
    }));
});

//# sourceMappingURL=VisuallyHidden.js.map
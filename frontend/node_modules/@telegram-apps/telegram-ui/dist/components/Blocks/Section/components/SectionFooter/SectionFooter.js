'use client';
import { _ as _extends } from "@swc/helpers/_/_extends";
import { _ as _object_destructuring_empty } from "@swc/helpers/_/_object_destructuring_empty";
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Caption } from "../../../../Typography/Caption/Caption";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
const FooterTypography = (_param)=>{
    var restProps = _extends({}, _object_destructuring_empty(_param));
    const platform = usePlatform();
    if (platform === 'ios') {
        return /*#__PURE__*/ _jsx(Caption, _object_spread({}, restProps));
    }
    return /*#__PURE__*/ _jsx(Subheadline, _object_spread({
        level: "2"
    }, restProps));
};
export const SectionFooter = (_param)=>{
    var { className, children, centered } = _param, restProps = _object_without_properties(_param, [
        "className",
        "children",
        "centered"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsx("footer", _object_spread_props(_object_spread({
        className: classNames("tgui-dbb364e8ced00cc8", platform === 'ios' && "tgui-8c4c6f82ba895475", centered && "tgui-8ebba379083b615a", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(FooterTypography, {
            className: "tgui-67471b69da3e3062",
            children: children
        })
    }));
};

//# sourceMappingURL=SectionFooter.js.map
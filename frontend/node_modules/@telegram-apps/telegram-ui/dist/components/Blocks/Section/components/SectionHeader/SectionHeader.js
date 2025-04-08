'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { useHeaderComponents } from "./hooks/useHeaderComponents";
export const SectionHeader = (_param)=>{
    var { large, className, children } = _param, restProps = _object_without_properties(_param, [
        "large",
        "className",
        "children"
    ]);
    const platform = usePlatform();
    const { Default, Large } = useHeaderComponents();
    const Component = large ? Large : Default;
    return /*#__PURE__*/ _jsx("header", _object_spread_props(_object_spread({
        className: classNames("tgui-d0251b46536ac046", platform === 'ios' && "tgui-b7217abb24e8763a", large && "tgui-34fd1a25cc171439", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(Component, {
            Component: "h1",
            className: "tgui-9c200683b316fde6",
            children: children
        })
    }));
};

//# sourceMappingURL=SectionHeader.js.map
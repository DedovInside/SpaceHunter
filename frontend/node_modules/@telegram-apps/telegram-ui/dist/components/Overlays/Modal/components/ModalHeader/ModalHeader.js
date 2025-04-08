import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { usePlatform } from "../../../../../hooks/usePlatform";
import { Text } from "../../../../Typography/Text/Text";
export const ModalHeader = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { before, after, className, children } = _param, props = _object_without_properties(_param, [
        "before",
        "after",
        "className",
        "children"
    ]);
    const platform = usePlatform();
    return /*#__PURE__*/ _jsxs("header", _object_spread_props(_object_spread({
        ref: ref,
        className: classNames("tgui-f67c8fb3553eee55", className)
    }, props), {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "tgui-09b5f6cfd7ba56ab",
                children: before
            }),
            platform === 'ios' && /*#__PURE__*/ _jsx(Text, {
                weight: "2",
                className: "tgui-7ce1022bfdcb0ae3",
                children: children
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "tgui-fe1d6742d85038d7",
                children: after
            })
        ]
    }));
});

//# sourceMappingURL=ModalHeader.js.map
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Icon12Quote } from "../../../icons/12/quote";
import { IconContainer } from "../IconContainer/IconContainer";
import { Subheadline } from "../../Typography/Subheadline/Subheadline";
/**
 * Renders a stylized blockquote element, typically used for quotations or special text. The component can include an
 * icon in the top right corner and supports different content types for flexible use within UI designs.
 */ export const Blockquote = (_param)=>{
    var { type = 'text', topRightIcon = /*#__PURE__*/ _jsx(Icon12Quote, {}), className, children } = _param, restProps = _object_without_properties(_param, [
        "type",
        "topRightIcon",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ _jsxs("div", _object_spread_props(_object_spread({
        className: classNames("tgui-79024fcb6d81ad79", className)
    }, restProps), {
        children: [
            type === 'text' ? /*#__PURE__*/ _jsx(Subheadline, {
                className: "tgui-16ed20e7a6e2daa0",
                children: children
            }) : children,
            /*#__PURE__*/ _jsx(IconContainer, {
                className: "tgui-bd5b6cd161834705",
                children: topRightIcon
            })
        ]
    }));
};

//# sourceMappingURL=Blockquote.js.map
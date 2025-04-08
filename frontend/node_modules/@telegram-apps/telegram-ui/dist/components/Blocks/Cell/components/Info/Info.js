import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "../../../../../helpers/classNames";
import { hasReactNode } from "../../../../../helpers/react/node";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
import { Text } from "../../../../Typography/Text/Text";
const typeStyles = {
    text: "tgui-c5be765fabc1327f",
    avatarStack: "tgui-437ab2028f14c95c"
};
/**
 * A versatile component designed to display either text information with an optional subtitle or a stack of avatars.
 * It adapts its structure based on the `type` prop, allowing for a wide range of use cases within user interfaces.
 */ export const Info = (_param)=>{
    var { type = 'text', subtitle, avatarStack, children, className } = _param, restProps = _object_without_properties(_param, [
        "type",
        "subtitle",
        "avatarStack",
        "children",
        "className"
    ]);
    const isAvatarStack = type === 'avatarStack';
    const isText = type === 'text';
    return /*#__PURE__*/ _jsxs("div", _object_spread_props(_object_spread({
        className: classNames("tgui-70fc390c70476f82", typeStyles[type], className)
    }, restProps), {
        children: [
            isAvatarStack && hasReactNode(avatarStack) && avatarStack,
            hasReactNode(children) && /*#__PURE__*/ _jsx(Text, {
                children: children
            }),
            isText && hasReactNode(subtitle) && /*#__PURE__*/ _jsx(Subheadline, {
                className: "tgui-4af039094fb946b4",
                level: "2",
                plain: false,
                children: subtitle
            })
        ]
    }));
};

//# sourceMappingURL=Info.js.map
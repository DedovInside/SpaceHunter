import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../../../helpers/classNames";
import { Image } from "../Image/Image";
import { AvatarAcronym } from "./components/AvatarAcronym/AvatarAcronym";
import { AvatarBadge } from "./components/AvatarBadge/AvatarBadge";
/**
 * Renders an image with specific styles for an avatar presentation, including optional acronym display and badge support.
 * Utilizes the `Image` component for core functionality, enhancing it with avatar-specific features like acronyms and badges.
 */ export const Avatar = (_param)=>{
    var { className, style, acronym, fallbackIcon, size } = _param, restProps = _object_without_properties(_param, [
        "className",
        "style",
        "acronym",
        "fallbackIcon",
        "size"
    ]);
    return /*#__PURE__*/ _jsx(Image, _object_spread({
        style: _object_spread({
            borderRadius: '50%'
        }, style),
        className: classNames("tgui-91c5537b51b490a7", acronym && "tgui-305551eb3f5abb68", className),
        fallbackIcon: acronym ? /*#__PURE__*/ _jsx(AvatarAcronym, {
            size: size,
            children: acronym
        }) : fallbackIcon,
        size: size
    }, restProps));
};
Avatar.Badge = AvatarBadge;

//# sourceMappingURL=Avatar.js.map
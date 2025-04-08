"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Avatar", {
    enumerable: true,
    get: function() {
        return Avatar;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _Image = require("../Image/Image");
const _AvatarAcronym = require("./components/AvatarAcronym/AvatarAcronym");
const _AvatarBadge = require("./components/AvatarBadge/AvatarBadge");
const Avatar = (_param)=>{
    var { className, style, acronym, fallbackIcon, size } = _param, restProps = _object_without_properties._(_param, [
        "className",
        "style",
        "acronym",
        "fallbackIcon",
        "size"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Image.Image, _object_spread._({
        style: _object_spread._({
            borderRadius: '50%'
        }, style),
        className: (0, _classNames.classNames)("tgui-91c5537b51b490a7", acronym && "tgui-305551eb3f5abb68", className),
        fallbackIcon: acronym ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_AvatarAcronym.AvatarAcronym, {
            size: size,
            children: acronym
        }) : fallbackIcon,
        size: size
    }, restProps));
};
Avatar.Badge = _AvatarBadge.AvatarBadge;

//# sourceMappingURL=Avatar.js.map
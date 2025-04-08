"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Info", {
    enumerable: true,
    get: function() {
        return Info;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../../../helpers/classNames");
const _node = require("../../../../../helpers/react/node");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const _Text = require("../../../../Typography/Text/Text");
const typeStyles = {
    text: "tgui-c5be765fabc1327f",
    avatarStack: "tgui-437ab2028f14c95c"
};
const Info = (_param)=>{
    var { type = 'text', subtitle, avatarStack, children, className } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "subtitle",
        "avatarStack",
        "children",
        "className"
    ]);
    const isAvatarStack = type === 'avatarStack';
    const isText = type === 'text';
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-70fc390c70476f82", typeStyles[type], className)
    }, restProps), {
        children: [
            isAvatarStack && (0, _node.hasReactNode)(avatarStack) && avatarStack,
            (0, _node.hasReactNode)(children) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, {
                children: children
            }),
            isText && (0, _node.hasReactNode)(subtitle) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                className: "tgui-4af039094fb946b4",
                level: "2",
                plain: false,
                children: subtitle
            })
        ]
    }));
};

//# sourceMappingURL=Info.js.map
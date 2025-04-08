"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Blockquote", {
    enumerable: true,
    get: function() {
        return Blockquote;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _quote = require("../../../icons/12/quote");
const _IconContainer = require("../IconContainer/IconContainer");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const Blockquote = (_param)=>{
    var { type = 'text', topRightIcon = /*#__PURE__*/ (0, _jsxruntime.jsx)(_quote.Icon12Quote, {}), className, children } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "topRightIcon",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-79024fcb6d81ad79", className)
    }, restProps), {
        children: [
            type === 'text' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                className: "tgui-16ed20e7a6e2daa0",
                children: children
            }) : children,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_IconContainer.IconContainer, {
                className: "tgui-bd5b6cd161834705",
                children: topRightIcon
            })
        ]
    }));
};

//# sourceMappingURL=Blockquote.js.map
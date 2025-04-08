'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Banner", {
    enumerable: true,
    get: function() {
        return Banner;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _classNames = require("../../../helpers/classNames");
const _node = require("../../../helpers/react/node");
const _usePlatform = require("../../../hooks/usePlatform");
const _cancel = require("../../../icons/24/cancel");
const _close = require("../../../icons/28/close");
const _close_ambient = require("../../../icons/28/close_ambient");
const _Tappable = require("../../Service/Tappable/Tappable");
const _Subheadline = require("../../Typography/Subheadline/Subheadline");
const _Text = require("../../Typography/Text/Text");
const _BannerDescriptionTypography = require("./components/BannerDescriptionTypography/BannerDescriptionTypography");
const Banner = (_param)=>{
    var { type, before, callout, header, subheader, description, background, className, children, onCloseIcon } = _param, restProps = _object_without_properties._(_param, [
        "type",
        "before",
        "callout",
        "header",
        "subheader",
        "description",
        "background",
        "className",
        "children",
        "onCloseIcon"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const hasBackground = (0, _node.hasReactNode)(background);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("section", _object_spread_props._(_object_spread._({
        className: (0, _classNames.classNames)("tgui-c3d21871b48e0ba3", platform === 'ios' && "tgui-cefdf70a2d9648ea", platform === 'base' && "tgui-7b260d7ad33f3ba0", hasBackground && "tgui-f80265c401d577b0", type === 'inline' && "tgui-d67d90bbcab86e14", className)
    }, restProps), {
        children: [
            hasBackground && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-11921b54915b369c",
                children: background
            }),
            before,
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "tgui-a04b768cea14d789",
                children: [
                    (0, _node.hasReactNode)(callout) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                        className: "tgui-62a759a0c54c3667",
                        level: "2",
                        children: callout
                    }),
                    (0, _node.hasReactNode)(header) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Text.Text, {
                        className: "tgui-2646957e5c9379f3",
                        weight: "2",
                        children: header
                    }),
                    (0, _node.hasReactNode)(subheader) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, {
                        className: "tgui-62a759a0c54c3667",
                        level: "2",
                        children: subheader
                    }),
                    (0, _node.hasReactNode)(description) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_BannerDescriptionTypography.BannerDescriptionTypography, {
                        className: "tgui-1e638bcb841cdfbc",
                        children: description
                    }),
                    (0, _node.hasReactNode)(children) && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "tgui-5e0d89b3bc8342d8",
                        children: children
                    })
                ]
            }),
            onCloseIcon && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Tappable.Tappable, {
                onClick: onCloseIcon,
                className: "tgui-fa2f2ea4a4ffc035",
                Component: "div",
                children: [
                    !hasBackground && (platform === 'ios' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_cancel.Icon24Cancel, {}) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_close.Icon28Close, {})),
                    hasBackground && /*#__PURE__*/ (0, _jsxruntime.jsx)(_close_ambient.Icon28CloseAmbient, {})
                ]
            })
        ]
    }));
};

//# sourceMappingURL=Banner.js.map
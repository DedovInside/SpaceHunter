'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _getBorderRadius = require("./helpers/getBorderRadius");
const _ImageBadge = require("./components/ImageBadge/ImageBadge");
const Image = (_param)=>{
    var { size = 40, className, alt, crossOrigin, decoding, loading, referrerPolicy, sizes, src, srcSet, useMap, style, fallbackIcon, children, onLoad, onError } = _param, restProps = _object_without_properties._(_param, [
        "size",
        "className",
        "alt",
        "crossOrigin",
        "decoding",
        "loading",
        "referrerPolicy",
        "sizes",
        "src",
        "srcSet",
        "useMap",
        "style",
        "fallbackIcon",
        "children",
        "onLoad",
        "onError"
    ]);
    const [loaded, setLoaded] = (0, _react.useState)(false);
    const [failed, setFailed] = (0, _react.useState)(false);
    const hasSrc = src || srcSet;
    const needShowFallbackIcon = (failed || !hasSrc) && /*#__PURE__*/ (0, _react.isValidElement)(fallbackIcon);
    const handleImageLoad = (event)=>{
        if (loaded) {
            return;
        }
        setLoaded(true);
        setFailed(false);
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(event);
    };
    const handleImageError = (event)=>{
        setLoaded(false);
        setFailed(true);
        onError === null || onError === void 0 ? void 0 : onError(event);
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", _object_spread_props._(_object_spread._({
        style: _object_spread._({
            width: size,
            minWidth: size,
            height: size,
            borderRadius: (style === null || style === void 0 ? void 0 : style.borderRadius) || (0, _getBorderRadius.getBorderRadius)(size)
        }, style),
        className: (0, _classNames.classNames)("tgui-30d8642662534eb5", loaded && "tgui-72bd4140eca37f53", className)
    }, restProps), {
        children: [
            hasSrc && /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
                alt: alt,
                className: "tgui-1191c597a64dbd25",
                crossOrigin: crossOrigin,
                decoding: decoding,
                loading: loading,
                referrerPolicy: referrerPolicy,
                sizes: sizes,
                src: src,
                srcSet: srcSet,
                useMap: useMap,
                onLoad: handleImageLoad,
                onError: handleImageError
            }),
            needShowFallbackIcon && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "tgui-5ee2f1c6e1da49b5",
                children: fallbackIcon
            }),
            children
        ]
    }));
};
Image.Badge = _ImageBadge.ImageBadge;

//# sourceMappingURL=Image.js.map
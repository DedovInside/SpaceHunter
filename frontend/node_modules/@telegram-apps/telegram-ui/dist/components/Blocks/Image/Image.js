'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isValidElement, useState } from "react";
import { classNames } from "../../../helpers/classNames";
import { getBorderRadius } from "./helpers/getBorderRadius";
import { ImageBadge } from "./components/ImageBadge/ImageBadge";
/**
 * Renders an image with optional fallback content. It supports custom sizing and will automatically
 * handle loading states and errors by optionally displaying a fallback icon. This component can also
 * include additional content, such as badges or overlays, as children.
 */ export const Image = (_param)=>{
    var { size = 40, className, alt, crossOrigin, decoding, loading, referrerPolicy, sizes, src, srcSet, useMap, style, fallbackIcon, children, onLoad, onError } = _param, restProps = _object_without_properties(_param, [
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
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);
    const hasSrc = src || srcSet;
    const needShowFallbackIcon = (failed || !hasSrc) && /*#__PURE__*/ isValidElement(fallbackIcon);
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
    return /*#__PURE__*/ _jsxs("div", _object_spread_props(_object_spread({
        style: _object_spread({
            width: size,
            minWidth: size,
            height: size,
            borderRadius: (style === null || style === void 0 ? void 0 : style.borderRadius) || getBorderRadius(size)
        }, style),
        className: classNames("tgui-30d8642662534eb5", loaded && "tgui-72bd4140eca37f53", className)
    }, restProps), {
        children: [
            hasSrc && /*#__PURE__*/ _jsx("img", {
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
            needShowFallbackIcon && /*#__PURE__*/ _jsx("div", {
                className: "tgui-5ee2f1c6e1da49b5",
                children: fallbackIcon
            }),
            children
        ]
    }));
};
Image.Badge = ImageBadge;

//# sourceMappingURL=Image.js.map
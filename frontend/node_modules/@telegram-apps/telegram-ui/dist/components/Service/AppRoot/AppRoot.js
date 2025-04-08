'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { classNames } from "../../../helpers/classNames";
import { multipleRef } from "../../../helpers/react/refs";
import { useObjectMemo } from "../../../hooks/useObjectMemo";
import { AppRootContext } from "./AppRootContext";
import { useAppearance } from "./hooks/useAppearance";
import { usePlatform } from "./hooks/usePlatform";
import { usePortalContainer } from "./hooks/usePortalContainer";
export const AppRoot = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { platform: platformProp, appearance: appearanceProp, portalContainer: portalContainerProp, children, className } = _param, restProps = _object_without_properties(_param, [
        "platform",
        "appearance",
        "portalContainer",
        "children",
        "className"
    ]);
    const appearance = useAppearance(appearanceProp);
    const portalContainer = usePortalContainer(portalContainerProp);
    const platform = usePlatform(platformProp);
    const contextValue = useObjectMemo({
        platform,
        appearance,
        portalContainer,
        isRendered: true
    });
    return /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
        ref: multipleRef(ref, portalContainer),
        className: classNames("tgui-6a12827a138e8827", platform === 'ios' && "tgui-56dbb42c1dbd5e2b", appearance === 'dark' && "tgui-865b921add8ee075", className)
    }, restProps), {
        children: /*#__PURE__*/ _jsx(AppRootContext.Provider, {
            value: contextValue,
            children: children
        })
    }));
});

//# sourceMappingURL=AppRoot.js.map
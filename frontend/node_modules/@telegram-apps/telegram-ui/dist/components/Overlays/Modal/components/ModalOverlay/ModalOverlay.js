import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { classNames } from "../../../../../helpers/classNames";
import { hexToRGB } from "../../../../../helpers/color";
import { getTelegramData } from "../../../../../helpers/telegram";
import { useAppRootContext } from "../../../../../hooks/useAppRootContext";
import { Drawer } from "@xelene/vaul-with-scroll-fix";
const DEFAULT_LIGHT_OVERLAY_RGB = [
    255,
    255,
    255
];
const DEFAULT_DARK_OVERLAY_RGB = [
    33,
    33,
    33
];
export const ModalOverlay = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { className } = _param, props = _object_without_properties(_param, [
        "className"
    ]);
    const context = useAppRootContext();
    // We don't use getComputedStyle because overlay renders before the appearance is changing
    const [r, g, b] = useMemo(()=>{
        const telegramData = getTelegramData();
        if (telegramData && telegramData.themeParams.bg_color) {
            return hexToRGB(telegramData.themeParams.bg_color);
        }
        return context.appearance === 'light' ? DEFAULT_LIGHT_OVERLAY_RGB : DEFAULT_DARK_OVERLAY_RGB;
    }, [
        context.appearance
    ]);
    return /*#__PURE__*/ _jsx(Drawer.Overlay, _object_spread({
        ref: ref,
        // Opacity on overlay is dynamically calculated based on the percentage of opened drawers
        // This is why we use rgba here and not background: token + opacity
        style: {
            background: `rgba(${r}, ${g}, ${b}, .4)`
        },
        className: classNames("tgui-3197096cb603b35a", className)
    }, props));
});

//# sourceMappingURL=ModalOverlay.js.map
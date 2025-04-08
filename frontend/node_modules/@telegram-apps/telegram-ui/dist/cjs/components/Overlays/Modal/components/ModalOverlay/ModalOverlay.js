"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ModalOverlay", {
    enumerable: true,
    get: function() {
        return ModalOverlay;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../../../helpers/classNames");
const _color = require("../../../../../helpers/color");
const _telegram = require("../../../../../helpers/telegram");
const _useAppRootContext = require("../../../../../hooks/useAppRootContext");
const _vaulwithscrollfix = require("@xelene/vaul-with-scroll-fix");
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
const ModalOverlay = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { className } = _param, props = _object_without_properties._(_param, [
        "className"
    ]);
    const context = (0, _useAppRootContext.useAppRootContext)();
    // We don't use getComputedStyle because overlay renders before the appearance is changing
    const [r, g, b] = (0, _react.useMemo)(()=>{
        const telegramData = (0, _telegram.getTelegramData)();
        if (telegramData && telegramData.themeParams.bg_color) {
            return (0, _color.hexToRGB)(telegramData.themeParams.bg_color);
        }
        return context.appearance === 'light' ? DEFAULT_LIGHT_OVERLAY_RGB : DEFAULT_DARK_OVERLAY_RGB;
    }, [
        context.appearance
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaulwithscrollfix.Drawer.Overlay, _object_spread._({
        ref: ref,
        // Opacity on overlay is dynamically calculated based on the percentage of opened drawers
        // This is why we use rgba here and not background: token + opacity
        style: {
            background: `rgba(${r}, ${g}, ${b}, .4)`
        },
        className: (0, _classNames.classNames)("tgui-3197096cb603b35a", className)
    }, props));
});

//# sourceMappingURL=ModalOverlay.js.map
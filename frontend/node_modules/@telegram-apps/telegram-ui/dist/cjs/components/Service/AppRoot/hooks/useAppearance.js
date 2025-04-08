'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppearance", {
    enumerable: true,
    get: function() {
        return useAppearance;
    }
});
const _react = require("react");
const _telegram = require("../../../../helpers/telegram");
const _AppRootContext = require("../AppRootContext");
const _getBrowserAppearanceSubscriber = require("./helpers/getBrowserAppearanceSubscriber");
const _getInitialAppearance = require("./helpers/getInitialAppearance");
const useAppearance = (appearanceProp)=>{
    const { appearance: contextAppearance } = (0, _react.useContext)(_AppRootContext.AppRootContext);
    const [appearance, setAppearance] = (0, _react.useState)(appearanceProp || contextAppearance || (0, _getInitialAppearance.getInitialAppearance)());
    const handleThemeChange = (0, _react.useCallback)(()=>{
        const telegramData = (0, _telegram.getTelegramData)();
        if (!telegramData) {
            return;
        }
        setAppearance(telegramData.colorScheme);
    }, []);
    (0, _react.useEffect)(()=>{
        if (appearanceProp !== undefined) {
            setAppearance(appearanceProp);
            return ()=>{};
        }
        const telegramData = (0, _telegram.getTelegramData)();
        if (telegramData) {
            telegramData.onEvent('themeChanged', handleThemeChange);
            return ()=>telegramData.offEvent('themeChanged', handleThemeChange);
        }
        return (0, _getBrowserAppearanceSubscriber.getBrowserAppearanceSubscriber)(setAppearance);
    }, [
        appearanceProp
    ]);
    return appearance;
};

//# sourceMappingURL=useAppearance.js.map
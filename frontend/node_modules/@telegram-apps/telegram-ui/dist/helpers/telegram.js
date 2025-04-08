import { canUseDOM } from "./dom";
export const getTelegramData = ()=>{
    var _window_Telegram;
    if (!canUseDOM) {
        return undefined;
    }
    return (_window_Telegram = window.Telegram) === null || _window_Telegram === void 0 ? void 0 : _window_Telegram.WebApp;
};

//# sourceMappingURL=telegram.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getTelegramData", {
    enumerable: true,
    get: function() {
        return getTelegramData;
    }
});
const _dom = require("./dom");
const getTelegramData = ()=>{
    var _window_Telegram;
    if (!_dom.canUseDOM) {
        return undefined;
    }
    return (_window_Telegram = window.Telegram) === null || _window_Telegram === void 0 ? void 0 : _window_Telegram.WebApp;
};

//# sourceMappingURL=telegram.js.map
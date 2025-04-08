"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getInitialPlatform", {
    enumerable: true,
    get: function() {
        return getInitialPlatform;
    }
});
const _telegram = require("../../../../../helpers/telegram");
const getInitialPlatform = ()=>{
    const telegramData = (0, _telegram.getTelegramData)();
    if (!telegramData) {
        return 'base';
    }
    if ([
        'ios',
        'macos'
    ].includes(telegramData.platform)) {
        return 'ios';
    }
    return 'base';
};

//# sourceMappingURL=getInitialPlatform.js.map
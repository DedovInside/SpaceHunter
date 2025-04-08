'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "usePlatform", {
    enumerable: true,
    get: function() {
        return usePlatform;
    }
});
const _useAppRootContext = require("./useAppRootContext");
const usePlatform = ()=>{
    const context = (0, _useAppRootContext.useAppRootContext)();
    return context.platform || 'base';
};

//# sourceMappingURL=usePlatform.js.map
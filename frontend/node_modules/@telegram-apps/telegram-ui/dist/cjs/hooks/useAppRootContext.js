'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useAppRootContext", {
    enumerable: true,
    get: function() {
        return useAppRootContext;
    }
});
const _react = require("react");
const _AppRootContext = require("../components/Service/AppRoot/AppRootContext");
const useAppRootContext = ()=>{
    const appRootContext = (0, _react.useContext)(_AppRootContext.AppRootContext);
    if (!appRootContext.isRendered) {
        throw new Error('[TGUI] Wrap your app with <AppRoot> component');
    }
    return appRootContext;
};

//# sourceMappingURL=useAppRootContext.js.map
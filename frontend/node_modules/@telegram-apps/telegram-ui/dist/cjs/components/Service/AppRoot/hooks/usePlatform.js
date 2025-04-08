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
const _react = require("react");
const _AppRootContext = require("../AppRootContext");
const _getInitialPlatform = require("./helpers/getInitialPlatform");
const usePlatform = (platform)=>{
    if (platform !== undefined) {
        return platform;
    }
    const appContext = (0, _react.useContext)(_AppRootContext.AppRootContext);
    if (appContext.isRendered && appContext.platform !== undefined) {
        return appContext.platform;
    }
    return (0, _getInitialPlatform.getInitialPlatform)();
};

//# sourceMappingURL=usePlatform.js.map
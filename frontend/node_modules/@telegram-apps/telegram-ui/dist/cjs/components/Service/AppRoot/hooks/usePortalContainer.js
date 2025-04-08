'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "usePortalContainer", {
    enumerable: true,
    get: function() {
        return usePortalContainer;
    }
});
const _react = require("react");
const _AppRootContext = require("../AppRootContext");
const usePortalContainer = (portalContainer)=>{
    if (portalContainer !== undefined) {
        return portalContainer;
    }
    const appContext = (0, _react.useContext)(_AppRootContext.AppRootContext);
    if (appContext.isRendered && appContext.portalContainer !== undefined) {
        return appContext.portalContainer;
    }
    return (0, _react.useRef)(null);
};

//# sourceMappingURL=usePortalContainer.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RootRenderer", {
    enumerable: true,
    get: function() {
        return RootRenderer;
    }
});
const _react = require("react");
const _reactdom = require("react-dom");
const _useAppRootContext = require("../../../hooks/useAppRootContext");
const RootRenderer = ({ children })=>{
    const { portalContainer } = (0, _useAppRootContext.useAppRootContext)();
    if (!(portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.current)) {
        return /*#__PURE__*/ (0, _react.isValidElement)(children) ? children : null;
    }
    return /*#__PURE__*/ (0, _reactdom.createPortal)(children, portalContainer.current);
};

//# sourceMappingURL=RootRenderer.js.map
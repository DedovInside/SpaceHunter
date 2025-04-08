'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRoot", {
    enumerable: true,
    get: function() {
        return AppRoot;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _refs = require("../../../helpers/react/refs");
const _useObjectMemo = require("../../../hooks/useObjectMemo");
const _AppRootContext = require("./AppRootContext");
const _useAppearance = require("./hooks/useAppearance");
const _usePlatform = require("./hooks/usePlatform");
const _usePortalContainer = require("./hooks/usePortalContainer");
const AppRoot = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { platform: platformProp, appearance: appearanceProp, portalContainer: portalContainerProp, children, className } = _param, restProps = _object_without_properties._(_param, [
        "platform",
        "appearance",
        "portalContainer",
        "children",
        "className"
    ]);
    const appearance = (0, _useAppearance.useAppearance)(appearanceProp);
    const portalContainer = (0, _usePortalContainer.usePortalContainer)(portalContainerProp);
    const platform = (0, _usePlatform.usePlatform)(platformProp);
    const contextValue = (0, _useObjectMemo.useObjectMemo)({
        platform,
        appearance,
        portalContainer,
        isRendered: true
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", _object_spread_props._(_object_spread._({
        ref: (0, _refs.multipleRef)(ref, portalContainer),
        className: (0, _classNames.classNames)("tgui-6a12827a138e8827", platform === 'ios' && "tgui-56dbb42c1dbd5e2b", appearance === 'dark' && "tgui-865b921add8ee075", className)
    }, restProps), {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_AppRootContext.AppRootContext.Provider, {
            value: contextValue,
            children: children
        })
    }));
});

//# sourceMappingURL=AppRoot.js.map
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Popper", {
    enumerable: true,
    get: function() {
        return Popper;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _classNames = require("../../../helpers/classNames");
const _refs = require("../../../helpers/react/refs");
const _useEnhancedEffect = require("../../../hooks/useEnhancedEffect");
const _reactdom = require("@floating-ui/react-dom");
const _RootRenderer = require("../../Service/RootRenderer/RootRenderer");
const _FloatingArrow = require("./components/FloatingArrow/FloatingArrow");
const _arrow = require("./components/FloatingArrow/icons/arrow");
const _autoUpdateFloatingElement = require("./helpers/autoUpdateFloatingElement");
const _useFloatingMiddlewares = require("./hooks/useFloatingMiddlewares");
const Popper = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { // UseFloatingMiddlewaresOptions
    placement = 'auto', sameWidth, offsetByMainAxis = 8, offsetByCrossAxis = 0, withArrow = true, customMiddlewares, // UseFloatingProps
    autoUpdateOnTargetResize = false, // ArrowProps
    arrowProps, ArrowIcon = _arrow.DefaultIcon, Component = 'div', style, targetRef, className, children } = _param, restProps = _object_without_properties._(_param, [
        "placement",
        "sameWidth",
        "offsetByMainAxis",
        "offsetByCrossAxis",
        "withArrow",
        "customMiddlewares",
        "autoUpdateOnTargetResize",
        "arrowProps",
        "ArrowIcon",
        "Component",
        "style",
        "targetRef",
        "className",
        "children"
    ]);
    const [arrowRef, setArrowRef] = (0, _react.useState)(null);
    const { strictPlacement, middlewares } = (0, _useFloatingMiddlewares.useFloatingMiddlewares)({
        placement,
        sameWidth,
        withArrow,
        arrowRef,
        arrowHeight: (arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.height) || _arrow.DEFAULT_ARROW_HEIGHT,
        arrowPadding: (arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.padding) || _arrow.DEFAULT_ARROW_PADDING,
        offsetByMainAxis,
        offsetByCrossAxis,
        customMiddlewares
    });
    const { placement: resolvedPlacement, refs, middlewareData, floatingStyles } = (0, _reactdom.useFloating)({
        placement: strictPlacement,
        middleware: middlewares,
        whileElementsMounted (...args) {
            return (0, _autoUpdateFloatingElement.autoUpdateFloatingElement)(...args, {
                elementResize: autoUpdateOnTargetResize
            });
        }
    });
    (0, _useEnhancedEffect.useEnhancedEffect)(()=>{
        refs.setReference('current' in targetRef ? targetRef.current : targetRef);
    }, [
        refs.setReference,
        targetRef
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_RootRenderer.RootRenderer, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(Component, _object_spread_props._(_object_spread._({}, restProps), {
            ref: (0, _refs.multipleRef)(ref, refs.setFloating),
            style: _object_spread._({}, style, floatingStyles),
            className: (0, _classNames.classNames)("tgui-e9c83f4f150e5513", className),
            children: [
                withArrow && /*#__PURE__*/ (0, _jsxruntime.jsx)(_FloatingArrow.FloatingArrow, _object_spread_props._(_object_spread._({}, arrowProps), {
                    coords: middlewareData.arrow,
                    placement: resolvedPlacement,
                    ref: setArrowRef,
                    Icon: ArrowIcon
                })),
                children
            ]
        }))
    });
});

//# sourceMappingURL=Popper.js.map
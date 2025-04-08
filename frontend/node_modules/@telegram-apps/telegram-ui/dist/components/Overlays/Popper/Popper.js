'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { classNames } from "../../../helpers/classNames";
import { multipleRef } from "../../../helpers/react/refs";
import { useEnhancedEffect } from "../../../hooks/useEnhancedEffect";
import { useFloating } from "@floating-ui/react-dom";
import { RootRenderer } from "../../Service/RootRenderer/RootRenderer";
import { FloatingArrow } from "./components/FloatingArrow/FloatingArrow";
import { DEFAULT_ARROW_HEIGHT, DEFAULT_ARROW_PADDING, DefaultIcon } from "./components/FloatingArrow/icons/arrow";
import { autoUpdateFloatingElement } from "./helpers/autoUpdateFloatingElement";
import { useFloatingMiddlewares } from "./hooks/useFloatingMiddlewares";
/**
 * Renders a Popper component, leveraging floating UI for dynamic, responsive positioning.
 * Supports advanced configurations like virtual elements, custom arrows, and auto-position updates.
 */ export const Popper = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { // UseFloatingMiddlewaresOptions
    placement = 'auto', sameWidth, offsetByMainAxis = 8, offsetByCrossAxis = 0, withArrow = true, customMiddlewares, // UseFloatingProps
    autoUpdateOnTargetResize = false, // ArrowProps
    arrowProps, ArrowIcon = DefaultIcon, Component = 'div', style, targetRef, className, children } = _param, restProps = _object_without_properties(_param, [
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
    const [arrowRef, setArrowRef] = useState(null);
    const { strictPlacement, middlewares } = useFloatingMiddlewares({
        placement,
        sameWidth,
        withArrow,
        arrowRef,
        arrowHeight: (arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.height) || DEFAULT_ARROW_HEIGHT,
        arrowPadding: (arrowProps === null || arrowProps === void 0 ? void 0 : arrowProps.padding) || DEFAULT_ARROW_PADDING,
        offsetByMainAxis,
        offsetByCrossAxis,
        customMiddlewares
    });
    const { placement: resolvedPlacement, refs, middlewareData, floatingStyles } = useFloating({
        placement: strictPlacement,
        middleware: middlewares,
        whileElementsMounted (...args) {
            return autoUpdateFloatingElement(...args, {
                elementResize: autoUpdateOnTargetResize
            });
        }
    });
    useEnhancedEffect(()=>{
        refs.setReference('current' in targetRef ? targetRef.current : targetRef);
    }, [
        refs.setReference,
        targetRef
    ]);
    return /*#__PURE__*/ _jsx(RootRenderer, {
        children: /*#__PURE__*/ _jsxs(Component, _object_spread_props(_object_spread({}, restProps), {
            ref: multipleRef(ref, refs.setFloating),
            style: _object_spread({}, style, floatingStyles),
            className: classNames("tgui-e9c83f4f150e5513", className),
            children: [
                withArrow && /*#__PURE__*/ _jsx(FloatingArrow, _object_spread_props(_object_spread({}, arrowProps), {
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
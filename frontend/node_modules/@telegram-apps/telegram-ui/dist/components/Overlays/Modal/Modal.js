'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useState } from "react";
import { classNames } from "../../../helpers/classNames";
import { useAppRootContext } from "../../../hooks/useAppRootContext";
import { Drawer } from "@xelene/vaul-with-scroll-fix";
import { ModalClose } from "./components/ModalClose/ModalClose";
import { ModalHeader } from "./components/ModalHeader/ModalHeader";
import { ModalOverlay } from "./components/ModalOverlay/ModalOverlay";
/**
 * Modal component, providing a flexible dialog framework with customizable content and interaction models.
 * It leverages the Drawer component from 'vaul' for its base functionality, enhanced with additional properties
 * and behaviors specific to modal dialogues, such as overlay management and nested modals.
 */ export const Modal = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { overlayComponent = /*#__PURE__*/ _jsx(ModalOverlay, {}), open, onOpenChange, header, className, children, nested, trigger, closeThreshold, scrollLockTimeout, snapPoints, fadeFromIndex, modal, preventScrollRestoration, dismissible } = _param, restProps = _object_without_properties(_param, [
        "overlayComponent",
        "open",
        "onOpenChange",
        "header",
        "className",
        "children",
        "nested",
        "trigger",
        "closeThreshold",
        "scrollLockTimeout",
        "snapPoints",
        "fadeFromIndex",
        "modal",
        "preventScrollRestoration",
        "dismissible"
    ]);
    var _container_portalContainer;
    const container = useAppRootContext();
    const [portal, setPortal] = useState((_container_portalContainer = container.portalContainer) === null || _container_portalContainer === void 0 ? void 0 : _container_portalContainer.current);
    // This is internal optimization for AppRoot
    // React sets ref to normal value only after the first render
    // If we will have this logic inside the AppRoot component, then all tree will be re-rendered
    useEffect(()=>{
        var _container_portalContainer;
        setPortal((_container_portalContainer = container.portalContainer) === null || _container_portalContainer === void 0 ? void 0 : _container_portalContainer.current);
    }, [
        container.portalContainer
    ]);
    const Component = nested ? Drawer.NestedRoot : Drawer.Root;
    return /*#__PURE__*/ _jsxs(Component, {
        open: open,
        onOpenChange: onOpenChange,
        closeThreshold: closeThreshold,
        scrollLockTimeout: scrollLockTimeout,
        snapPoints: snapPoints,
        fadeFromIndex: fadeFromIndex,
        modal: modal,
        preventScrollRestoration: preventScrollRestoration,
        dismissible: dismissible,
        children: [
            trigger && /*#__PURE__*/ _jsx(Drawer.Trigger, {
                asChild: true,
                children: trigger
            }),
            /*#__PURE__*/ _jsxs(Drawer.Portal, {
                container: portal,
                children: [
                    overlayComponent,
                    /*#__PURE__*/ _jsxs(Drawer.Content, _object_spread_props(_object_spread({
                        ref: ref,
                        className: classNames("tgui-cc76354712c6e8d9", className)
                    }, restProps), {
                        children: [
                            header,
                            /*#__PURE__*/ _jsx("div", {
                                className: "tgui-5dc6ad1ca3ac3ed4",
                                children: children
                            })
                        ]
                    }))
                ]
            })
        ]
    });
});
Modal.Header = ModalHeader;
Modal.Overlay = ModalOverlay;
Modal.Close = ModalClose;

//# sourceMappingURL=Modal.js.map
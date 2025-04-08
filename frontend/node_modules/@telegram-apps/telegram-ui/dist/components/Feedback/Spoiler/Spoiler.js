'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { classNames } from "../../../helpers/classNames";
import { callMultiple } from "../../../helpers/function";
/**
 * Provides a way to hide or show content, such as details or spoilers, with a simple click.
 * The visibility state can be controlled externally via props or toggled by user interaction.
 */ export const Spoiler = (_param)=>{
    var { visible = false, className, children } = _param, restProps = _object_without_properties(_param, [
        "visible",
        "className",
        "children"
    ]);
    const [isVisible, setIsVisible] = useState(visible);
    useEffect(()=>{
        setIsVisible(visible);
    }, [
        visible
    ]);
    const toggle = ()=>setIsVisible(!isVisible);
    return(// It's a spoiler component, content inside is available for screen readers
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({}, restProps), {
        className: classNames("tgui-86f452d8e92a2075", isVisible && "tgui-aff2a6268e887037", className),
        onClick: callMultiple(toggle, restProps.onClick),
        onKeyDown: callMultiple(toggle, restProps.onKeyDown),
        children: children
    })));
};

//# sourceMappingURL=Spoiler.js.map
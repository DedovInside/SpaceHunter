'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { classNames } from "../../../helpers/classNames";
import { hasReactNode } from "../../../helpers/react/node";
import { usePlatform } from "../../../hooks/usePlatform";
import { useTimeout } from "../../../hooks/useTimeout";
import { RootRenderer } from "../../Service/RootRenderer/RootRenderer";
import { Caption } from "../../Typography/Caption/Caption";
import { SnackbarButton } from "./components/SnackbarButton/SnackbarButton";
const TRANSITION_FINISH_DURATION = 320;
/**
 * Displays a brief message at the bottom of the screen, which can contain actions and other content.
 * It automatically dismisses after a set duration, providing feedback or interaction prompts to users.
 */ export const Snackbar = (_param)=>{
    var { before, after, description, link, children, className, duration = 4000, onClose } = _param, restProps = _object_without_properties(_param, [
        "before",
        "after",
        "description",
        "link",
        "children",
        "className",
        "duration",
        "onClose"
    ]);
    const platform = usePlatform();
    const [closing, setClosing] = useState(false);
    const close = ()=>{
        setClosing(true);
        setTimeout(onClose, TRANSITION_FINISH_DURATION);
    };
    const closeTimeout = useTimeout(close, duration);
    useEffect(()=>closeTimeout.set(), [
        closeTimeout
    ]);
    return /*#__PURE__*/ _jsx(RootRenderer, {
        children: /*#__PURE__*/ _jsx("div", _object_spread_props(_object_spread({
            className: classNames("tgui-bed09b0692380ce7", platform === 'ios' && "tgui-c2ca59c94a46245e", closing && "tgui-a1e25a2488982fc5", className)
        }, restProps), {
            children: /*#__PURE__*/ _jsxs("div", {
                className: "tgui-a869502f11f22b6c",
                children: [
                    hasReactNode(before) && /*#__PURE__*/ _jsx("div", {
                        className: "tgui-229bfa1a0a8ac43f",
                        children: before
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "tgui-7d8f183ba67229e9",
                        children: [
                            hasReactNode(children) && /*#__PURE__*/ _jsx(Caption, {
                                weight: "2",
                                children: children
                            }),
                            hasReactNode(description) && /*#__PURE__*/ _jsx(Caption, {
                                children: description
                            }),
                            hasReactNode(link) && /*#__PURE__*/ _jsx(Caption, {
                                children: link
                            })
                        ]
                    }),
                    hasReactNode(after) && /*#__PURE__*/ _jsx("div", {
                        className: "tgui-093aea87229643ac",
                        children: after
                    })
                ]
            })
        }))
    });
};
Snackbar.Button = SnackbarButton;

//# sourceMappingURL=Snackbar.js.map
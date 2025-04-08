import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Keys } from "../../../helpers/accessibility";
import { createChunks } from "../../../helpers/chunk";
import { classNames } from "../../../helpers/classNames";
import { usePlatform } from "../../../hooks/usePlatform";
import { Icon36Backspace } from "../../../icons/36/backspace";
import { PinInputButton } from "./components/PinInputButton/PinInputButton";
import { RootRenderer } from "../../Service/RootRenderer/RootRenderer";
import { Headline } from "../../Typography/Headline/Headline";
import { PinInputCell } from "./components/PinInputCell/PinInputCell";
import { AVAILABLE_PINS, usePinInput } from "./hooks/usePinInput";
const PIN_MIN_COUNT = 2;
/**
 * Renders a set of input fields for entering pin codes with a virtual keypad for value entry and deletion.
 */ export const PinInput = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { label = 'Enter your pin', pinCount = 4, className, value: valueProp = [], onChange } = _param, restProps = _object_without_properties(_param, [
        "label",
        "pinCount",
        "className",
        "value",
        "onChange"
    ]);
    const platform = usePlatform();
    const normalizedPinCount = Math.max(PIN_MIN_COUNT, pinCount);
    const { handleClickValue, handleClickBackspace, setInputRefByIndex, value, handleButton } = usePinInput({
        value: valueProp,
        onChange,
        pinCount: normalizedPinCount
    });
    return /*#__PURE__*/ _jsx(RootRenderer, {
        children: /*#__PURE__*/ _jsxs("section", _object_spread_props(_object_spread({
            ref: ref,
            className: classNames("tgui-a641ca1e63331268", platform === 'ios' && "tgui-bf64531d065e1bd9", className)
        }, restProps), {
            children: [
                /*#__PURE__*/ _jsxs("header", {
                    className: "tgui-a40b67b8ec9e3a49",
                    children: [
                        /*#__PURE__*/ _jsx(Headline, {
                            className: "tgui-7df9ee9d6d6586de",
                            weight: "2",
                            children: label
                        }),
                        /*#__PURE__*/ _jsx("div", {
                            className: "tgui-36c453f0a9d51371",
                            children: Array.from({
                                length: normalizedPinCount
                            }).map((_, index)=>/*#__PURE__*/ _jsx(PinInputCell, {
                                    ref: (labelRef)=>setInputRefByIndex(index, labelRef),
                                    isTyped: index < value.length,
                                    value: value[index] || '',
                                    onKeyDown: (event)=>handleButton(index, event.key),
                                    autoFocus: index === 0,
                                    tabIndex: -1,
                                    readOnly: true
                                }, index))
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "tgui-0e77c7f1a1b82c84",
                    children: createChunks(AVAILABLE_PINS, 3).map((rows)=>/*#__PURE__*/ _jsx("div", {
                            className: "tgui-49b69c407401f76c",
                            children: rows.map((element)=>{
                                let children = element;
                                let clickFunction = ()=>handleClickValue(Number(element));
                                if (element === Keys.BACKSPACE) {
                                    clickFunction = ()=>handleClickBackspace();
                                    children = /*#__PURE__*/ _jsx(Icon36Backspace, {
                                        className: "tgui-14d79626209a204a"
                                    });
                                }
                                return /*#__PURE__*/ _jsx(PinInputButton, {
                                    onClick: clickFunction,
                                    children: children
                                }, element);
                            })
                        }, rows.toString()))
                })
            ]
        }))
    });
});

//# sourceMappingURL=PinInput.js.map
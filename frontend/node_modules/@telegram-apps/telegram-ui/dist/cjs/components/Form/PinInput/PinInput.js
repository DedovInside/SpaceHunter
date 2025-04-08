"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PinInput", {
    enumerable: true,
    get: function() {
        return PinInput;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _accessibility = require("../../../helpers/accessibility");
const _chunk = require("../../../helpers/chunk");
const _classNames = require("../../../helpers/classNames");
const _usePlatform = require("../../../hooks/usePlatform");
const _backspace = require("../../../icons/36/backspace");
const _PinInputButton = require("./components/PinInputButton/PinInputButton");
const _RootRenderer = require("../../Service/RootRenderer/RootRenderer");
const _Headline = require("../../Typography/Headline/Headline");
const _PinInputCell = require("./components/PinInputCell/PinInputCell");
const _usePinInput = require("./hooks/usePinInput");
const PIN_MIN_COUNT = 2;
const PinInput = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { label = 'Enter your pin', pinCount = 4, className, value: valueProp = [], onChange } = _param, restProps = _object_without_properties._(_param, [
        "label",
        "pinCount",
        "className",
        "value",
        "onChange"
    ]);
    const platform = (0, _usePlatform.usePlatform)();
    const normalizedPinCount = Math.max(PIN_MIN_COUNT, pinCount);
    const { handleClickValue, handleClickBackspace, setInputRefByIndex, value, handleButton } = (0, _usePinInput.usePinInput)({
        value: valueProp,
        onChange,
        pinCount: normalizedPinCount
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_RootRenderer.RootRenderer, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("section", _object_spread_props._(_object_spread._({
            ref: ref,
            className: (0, _classNames.classNames)("tgui-a641ca1e63331268", platform === 'ios' && "tgui-bf64531d065e1bd9", className)
        }, restProps), {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("header", {
                    className: "tgui-a40b67b8ec9e3a49",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_Headline.Headline, {
                            className: "tgui-7df9ee9d6d6586de",
                            weight: "2",
                            children: label
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "tgui-36c453f0a9d51371",
                            children: Array.from({
                                length: normalizedPinCount
                            }).map((_, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_PinInputCell.PinInputCell, {
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
                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "tgui-0e77c7f1a1b82c84",
                    children: (0, _chunk.createChunks)(_usePinInput.AVAILABLE_PINS, 3).map((rows)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "tgui-49b69c407401f76c",
                            children: rows.map((element)=>{
                                let children = element;
                                let clickFunction = ()=>handleClickValue(Number(element));
                                if (element === _accessibility.Keys.BACKSPACE) {
                                    clickFunction = ()=>handleClickBackspace();
                                    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_backspace.Icon36Backspace, {
                                        className: "tgui-14d79626209a204a"
                                    });
                                }
                                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_PinInputButton.PinInputButton, {
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
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AVAILABLE_PINS: function() {
        return AVAILABLE_PINS;
    },
    usePinInput: function() {
        return usePinInput;
    }
});
const _react = require("react");
const _accessibility = require("../../../../helpers/accessibility");
const _math = require("../../../../helpers/math");
const _useEnsureControl = require("../../../../hooks/useEnsureControl");
const AVAILABLE_PINS = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    _accessibility.Keys.BACKSPACE
];
const usePinInput = ({ pinCount, value: valueProp = [], onChange })=>{
    const inputRefs = (0, _react.useRef)([]).current;
    const [value, setValue] = (0, _useEnsureControl.useCustomEnsuredControl)({
        defaultValue: valueProp,
        onChange
    });
    const focusByIndex = (index)=>{
        requestAnimationFrame(()=>{
            var _inputRefs_index;
            return (_inputRefs_index = inputRefs[index]) === null || _inputRefs_index === void 0 ? void 0 : _inputRefs_index.focus();
        });
    };
    const setValueByIndex = (index, newValue)=>{
        setValue((prev)=>{
            const nextValue = [
                ...prev
            ];
            nextValue[index] = newValue;
            return nextValue;
        });
    };
    const removeLastValue = (currentIndex)=>{
        setValue((prev)=>prev.slice(0, -1));
        focusByIndex(currentIndex - 1);
    };
    const handleClickValue = (0, _react.useCallback)((enteredValue)=>{
        const lastIndex = (0, _math.clamp)(value.length, 0, pinCount - 1);
        setValueByIndex(lastIndex, enteredValue);
        focusByIndex(lastIndex + 1);
    }, [
        value,
        pinCount
    ]);
    const handleClickBackspace = (0, _react.useCallback)(()=>{
        removeLastValue(value.length - 1);
    }, [
        value
    ]);
    const handleButton = (0, _react.useCallback)((index, button)=>{
        if (AVAILABLE_PINS.includes(Number(button))) {
            setValueByIndex(index, Number(button));
            focusByIndex(index + 1);
        }
        switch(button){
            case _accessibility.Keys.BACKSPACE:
                removeLastValue(index);
                break;
            case _accessibility.Keys.ARROW_LEFT:
                focusByIndex(index - 1);
                break;
            case _accessibility.Keys.ARROW_RIGHT:
                focusByIndex(index + 1);
                break;
            default:
                break;
        }
    }, []);
    const setInputRefByIndex = (0, _react.useCallback)((index, ref)=>{
        if (!ref) {
            return;
        }
        inputRefs[index] = ref;
    }, []);
    return {
        value,
        setInputRefByIndex,
        handleClickValue,
        handleClickBackspace,
        handleButton
    };
};

//# sourceMappingURL=usePinInput.js.map
'use client';
import { useCallback, useRef } from "react";
import { Keys } from "../../../../helpers/accessibility";
import { clamp } from "../../../../helpers/math";
import { useCustomEnsuredControl } from "../../../../hooks/useEnsureControl";
export const AVAILABLE_PINS = [
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
    Keys.BACKSPACE
];
export const usePinInput = ({ pinCount, value: valueProp = [], onChange })=>{
    const inputRefs = useRef([]).current;
    const [value, setValue] = useCustomEnsuredControl({
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
    const handleClickValue = useCallback((enteredValue)=>{
        const lastIndex = clamp(value.length, 0, pinCount - 1);
        setValueByIndex(lastIndex, enteredValue);
        focusByIndex(lastIndex + 1);
    }, [
        value,
        pinCount
    ]);
    const handleClickBackspace = useCallback(()=>{
        removeLastValue(value.length - 1);
    }, [
        value
    ]);
    const handleButton = useCallback((index, button)=>{
        if (AVAILABLE_PINS.includes(Number(button))) {
            setValueByIndex(index, Number(button));
            focusByIndex(index + 1);
        }
        switch(button){
            case Keys.BACKSPACE:
                removeLastValue(index);
                break;
            case Keys.ARROW_LEFT:
                focusByIndex(index - 1);
                break;
            case Keys.ARROW_RIGHT:
                focusByIndex(index + 1);
                break;
            default:
                break;
        }
    }, []);
    const setInputRefByIndex = useCallback((index, ref)=>{
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
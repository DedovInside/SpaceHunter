'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { useCallback, useRef, useState } from "react";
import { useCustomEnsuredControl } from "../../../../hooks/useEnsureControl";
import { getNewOptionData } from "./helpers/getNewOptionData";
import { isValueLikeOption } from "./helpers/isValueLikeOption";
import { simulateReactInput } from "./helpers/simulateReactInput";
/**
 * Hook for managing the state and interactions of a multiselect input component.
 * It handles adding and removing options, input changes, and input clearing functionalities.
 */ export const useMultiselectInput = ({ disabled, value: valueProp, onChange, defaultValue = [], inputValue: inputValueProp = '', onInputChange })=>{
    const [value, setValue] = useCustomEnsuredControl({
        value: valueProp,
        disabled,
        defaultValue,
        onChange
    });
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState(inputValueProp);
    const toggleOption = useCallback((nextValueProp, isNewValue)=>{
        let valueForChange = valueProp;
        setValue((prevValue)=>{
            const isLikeOption = isValueLikeOption(nextValueProp);
            const resolvedOption = isLikeOption ? getNewOptionData(nextValueProp.value, nextValueProp.label) : getNewOptionData(nextValueProp, typeof nextValueProp === 'string' ? nextValueProp : '');
            const nextValue = prevValue.filter((option)=>resolvedOption.value !== option.value);
            if (isNewValue) {
                nextValue.push(isLikeOption ? _object_spread({}, nextValueProp, resolvedOption) : resolvedOption);
            }
            valueForChange = nextValue;
            return nextValue;
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(valueForChange);
    }, [
        setValue
    ]);
    const clearInput = useCallback(()=>{
        simulateReactInput(inputRef.current, '');
    }, [
        inputRef
    ]);
    const addOption = useCallback((newValue)=>toggleOption(newValue, true), [
        toggleOption
    ]);
    const removeOption = useCallback((newValue)=>{
        toggleOption(newValue, false);
    }, [
        toggleOption
    ]);
    const addOptionFromInput = useCallback((inputValueToAdd)=>{
        const label = inputValueToAdd.trim();
        if (!label) {
            return;
        }
        addOption(label);
        clearInput();
    }, [
        addOption,
        clearInput
    ]);
    const inputChange = useCallback((event)=>{
        setInputValue(event.currentTarget.value);
        onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(event);
    }, [
        onInputChange
    ]);
    return {
        value,
        addOption,
        addOptionFromInput,
        removeOption,
        inputRef,
        inputValue,
        onInputChange: inputChange,
        clearInput
    };
};

//# sourceMappingURL=useMultiselectInput.js.map
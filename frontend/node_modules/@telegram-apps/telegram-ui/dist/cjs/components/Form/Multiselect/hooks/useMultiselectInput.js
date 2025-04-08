'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMultiselectInput", {
    enumerable: true,
    get: function() {
        return useMultiselectInput;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _react = require("react");
const _useEnsureControl = require("../../../../hooks/useEnsureControl");
const _getNewOptionData = require("./helpers/getNewOptionData");
const _isValueLikeOption = require("./helpers/isValueLikeOption");
const _simulateReactInput = require("./helpers/simulateReactInput");
const useMultiselectInput = ({ disabled, value: valueProp, onChange, defaultValue = [], inputValue: inputValueProp = '', onInputChange })=>{
    const [value, setValue] = (0, _useEnsureControl.useCustomEnsuredControl)({
        value: valueProp,
        disabled,
        defaultValue,
        onChange
    });
    const inputRef = (0, _react.useRef)(null);
    const [inputValue, setInputValue] = (0, _react.useState)(inputValueProp);
    const toggleOption = (0, _react.useCallback)((nextValueProp, isNewValue)=>{
        let valueForChange = valueProp;
        setValue((prevValue)=>{
            const isLikeOption = (0, _isValueLikeOption.isValueLikeOption)(nextValueProp);
            const resolvedOption = isLikeOption ? (0, _getNewOptionData.getNewOptionData)(nextValueProp.value, nextValueProp.label) : (0, _getNewOptionData.getNewOptionData)(nextValueProp, typeof nextValueProp === 'string' ? nextValueProp : '');
            const nextValue = prevValue.filter((option)=>resolvedOption.value !== option.value);
            if (isNewValue) {
                nextValue.push(isLikeOption ? _object_spread._({}, nextValueProp, resolvedOption) : resolvedOption);
            }
            valueForChange = nextValue;
            return nextValue;
        });
        onChange === null || onChange === void 0 ? void 0 : onChange(valueForChange);
    }, [
        setValue
    ]);
    const clearInput = (0, _react.useCallback)(()=>{
        (0, _simulateReactInput.simulateReactInput)(inputRef.current, '');
    }, [
        inputRef
    ]);
    const addOption = (0, _react.useCallback)((newValue)=>toggleOption(newValue, true), [
        toggleOption
    ]);
    const removeOption = (0, _react.useCallback)((newValue)=>{
        toggleOption(newValue, false);
    }, [
        toggleOption
    ]);
    const addOptionFromInput = (0, _react.useCallback)((inputValueToAdd)=>{
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
    const inputChange = (0, _react.useCallback)((event)=>{
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
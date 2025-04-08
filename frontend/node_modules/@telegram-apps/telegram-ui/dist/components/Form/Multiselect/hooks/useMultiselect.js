'use client';
import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { useCallback, useState } from "react";
import { isEqual } from "../../../../helpers/equal";
import { useEnhancedEffect } from "../../../../hooks/useEnhancedEffect";
import { defaultFilterFn } from "./helpers/filter";
import { transformOptions } from "./helpers/transformOptions";
import { DEFAULT_EMPTY_TEXT, DEFAULT_SELECTED_BEHAVIOR } from "./constants";
import { useMultiselectInput } from "./useMultiselectInput";
/**
 * Hook to manage the state and interactions of a multiselect component.
 * It encapsulates logic for option selection, input change handling, dropdown visibility, and focused option management.
 */ export const useMultiselect = ({ // Common props
disabled, // Options props
value: valueProp, defaultValue, onChange, // Input props
inputValue: inputValueProp = '', onInputChange: onInputChangeProp, // Dropdown props
creatable = false, emptyText = DEFAULT_EMPTY_TEXT, filterFn = defaultFilterFn, selectedBehavior = DEFAULT_SELECTED_BEHAVIOR, options: optionsProp = [] })=>{
    const _useMultiselectInput = useMultiselectInput({
        // Option props
        value: valueProp,
        defaultValue,
        onChange,
        // Input Props
        inputValue: inputValueProp,
        onInputChange: onInputChangeProp,
        // Other Props
        disabled
    }), { value, inputValue, onInputChange } = _useMultiselectInput, restMultiselectProps = _object_without_properties(_useMultiselectInput, [
        "value",
        "inputValue",
        "onInputChange"
    ]);
    const [opened, setOpened] = useState(false);
    const [options, setOptions] = useState(()=>opened ? transformOptions({
            value,
            inputValue,
            emptyText,
            creatable,
            filterFn,
            options: optionsProp,
            selectedBehavior
        }) : []);
    const [focusedOptionIndex, setFocusedOptionIndex] = useState(0);
    const [focusedOption, setFocusedOption] = useState(null);
    const handleInputChange = useCallback((event)=>{
        onInputChange(event);
        if (!opened) {
            return;
        }
        setOpened(true);
        setFocusedOptionIndex(0);
    }, [
        onInputChange,
        opened
    ]);
    useEnhancedEffect(()=>{
        if (!opened) {
            return;
        }
        setOptions((prevOptions)=>{
            const nextOptions = transformOptions({
                value,
                inputValue,
                emptyText,
                creatable,
                filterFn,
                options: optionsProp,
                selectedBehavior
            });
            if (isEqual(prevOptions, nextOptions)) {
                return prevOptions;
            }
            return nextOptions;
        });
    }, [
        opened,
        value,
        inputValue,
        optionsProp,
        creatable,
        selectedBehavior,
        filterFn
    ]);
    return _object_spread_props(_object_spread({}, restMultiselectProps), {
        // Options props
        value,
        // Input props
        inputValue,
        onInputChange: handleInputChange,
        // States for dropdown
        options,
        opened,
        setOpened,
        focusedOption,
        focusedOptionIndex,
        setFocusedOption,
        setFocusedOptionIndex
    });
};

//# sourceMappingURL=useMultiselect.js.map
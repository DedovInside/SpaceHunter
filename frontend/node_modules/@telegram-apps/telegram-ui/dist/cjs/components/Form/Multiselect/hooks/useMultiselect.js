'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMultiselect", {
    enumerable: true,
    get: function() {
        return useMultiselect;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _react = require("react");
const _equal = require("../../../../helpers/equal");
const _useEnhancedEffect = require("../../../../hooks/useEnhancedEffect");
const _filter = require("./helpers/filter");
const _transformOptions = require("./helpers/transformOptions");
const _constants = require("./constants");
const _useMultiselectInput = require("./useMultiselectInput");
const useMultiselect = ({ // Common props
disabled, // Options props
value: valueProp, defaultValue, onChange, // Input props
inputValue: inputValueProp = '', onInputChange: onInputChangeProp, // Dropdown props
creatable = false, emptyText = _constants.DEFAULT_EMPTY_TEXT, filterFn = _filter.defaultFilterFn, selectedBehavior = _constants.DEFAULT_SELECTED_BEHAVIOR, options: optionsProp = [] })=>{
    const _useMultiselectInput1 = (0, _useMultiselectInput.useMultiselectInput)({
        // Option props
        value: valueProp,
        defaultValue,
        onChange,
        // Input Props
        inputValue: inputValueProp,
        onInputChange: onInputChangeProp,
        // Other Props
        disabled
    }), { value, inputValue, onInputChange } = _useMultiselectInput1, restMultiselectProps = _object_without_properties._(_useMultiselectInput1, [
        "value",
        "inputValue",
        "onInputChange"
    ]);
    const [opened, setOpened] = (0, _react.useState)(false);
    const [options, setOptions] = (0, _react.useState)(()=>opened ? (0, _transformOptions.transformOptions)({
            value,
            inputValue,
            emptyText,
            creatable,
            filterFn,
            options: optionsProp,
            selectedBehavior
        }) : []);
    const [focusedOptionIndex, setFocusedOptionIndex] = (0, _react.useState)(0);
    const [focusedOption, setFocusedOption] = (0, _react.useState)(null);
    const handleInputChange = (0, _react.useCallback)((event)=>{
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
    (0, _useEnhancedEffect.useEnhancedEffect)(()=>{
        if (!opened) {
            return;
        }
        setOptions((prevOptions)=>{
            const nextOptions = (0, _transformOptions.transformOptions)({
                value,
                inputValue,
                emptyText,
                creatable,
                filterFn,
                options: optionsProp,
                selectedBehavior
            });
            if ((0, _equal.isEqual)(prevOptions, nextOptions)) {
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
    return _object_spread_props._(_object_spread._({}, restMultiselectProps), {
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
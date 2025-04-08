'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Multiselect", {
    enumerable: true,
    get: function() {
        return Multiselect;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _accessibility = require("../../../helpers/accessibility");
const _classNames = require("../../../helpers/classNames");
const _function = require("../../../helpers/function");
const _refs = require("../../../helpers/react/refs");
const _useGlobalClicks = require("../../../hooks/useGlobalClicks");
const _chevron_down = require("../../../icons/20/chevron_down");
const _FormInput = require("../FormInput/FormInput");
const _MultiselectBase = require("./components/MultiselectBase/MultiselectBase");
const _MultiselectDropdown = require("./components/MultiselectDropdown/MultiselectDropdown");
const _constants = require("./hooks/constants");
const _useMultiselect = require("./hooks/useMultiselect");
const Multiselect = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { // FormInput options
    header, before, status, className, children, disabled, // CustomSelectDropdownProps
    options: optionsProp, closeDropdownAfterSelect = false, selectedBehavior, emptyText, creatable = false, filterFn, // MultiselectInputProps
    value: valueProp = [], defaultValue, inputValue: inputValueProp, renderChip, renderOption, onInputChange: onInputChangeProp, onChange, onFocus, onBlur, onKeyDown } = _param, restProps = _object_without_properties._(_param, [
        "header",
        "before",
        "status",
        "className",
        "children",
        "disabled",
        "options",
        "closeDropdownAfterSelect",
        "selectedBehavior",
        "emptyText",
        "creatable",
        "filterFn",
        "value",
        "defaultValue",
        "inputValue",
        "renderChip",
        "renderOption",
        "onInputChange",
        "onChange",
        "onFocus",
        "onBlur",
        "onKeyDown"
    ]);
    const { // Option props
    value, addOptionFromInput, addOption, removeOption, // Input props
    inputRef, inputValue, clearInput, onInputChange, // Dropdown props
    options, opened, setOpened, focusedOption, focusedOptionIndex, setFocusedOption, setFocusedOptionIndex } = (0, _useMultiselect.useMultiselect)({
        // Option props
        value: valueProp,
        defaultValue,
        onChange,
        // Input props
        inputValue: inputValueProp,
        onInputChange: onInputChangeProp,
        // Dropdown props
        options: optionsProp,
        emptyText,
        creatable,
        filterFn,
        selectedBehavior,
        // Other props
        disabled
    });
    const containerRef = (0, _react.useRef)(null);
    const rootRef = (0, _react.useRef)(null);
    const dropdownAriaId = (0, _react.useId)();
    const dropdownScrollBoxRef = (0, _react.useRef)(null);
    const handleFocus = ()=>{
        setOpened(true);
        setFocusedOptionIndex(null);
    };
    const handleBlur = (event)=>{
        if (!event.defaultPrevented && !creatable) {
            event.preventDefault();
        }
    };
    const optionsNodes = (0, _react.useRef)([]).current;
    const scrollToElement = (index, center = false)=>{
        const dropdown = dropdownScrollBoxRef.current;
        const item = optionsNodes[index];
        if (!item || !dropdown) {
            return;
        }
        const dropdownHeight = dropdown.offsetHeight;
        const { scrollTop } = dropdown;
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        if (center) {
            dropdown.scrollTop = itemTop - dropdownHeight / 2 + itemHeight / 2;
        } else if (itemTop + itemHeight > dropdownHeight + scrollTop) {
            dropdown.scrollTop = itemTop - dropdownHeight + itemHeight;
        } else if (itemTop < scrollTop) {
            dropdown.scrollTop = itemTop;
        }
    };
    const focusOptionByIndex = (index, oldIndex)=>{
        let focusedIndex = index;
        const { length } = options;
        if (index < 0) {
            focusedIndex = length - 1;
        } else if (index >= length) {
            focusedIndex = 0;
        }
        if (focusedIndex === oldIndex) {
            return;
        }
        scrollToElement(focusedIndex);
        setFocusedOptionIndex(focusedIndex);
    };
    const focusOption = (nextIndex, type)=>{
        let index = nextIndex === null ? -1 : nextIndex;
        if (type === _constants.FOCUS_ACTION_NEXT) {
            index += 1;
        }
        if (type === _constants.FOCUS_ACTION_PREV) {
            index -= 1;
        }
        focusOptionByIndex(index, focusedOptionIndex);
    };
    const handleKeyDown = (event)=>{
        if (event.defaultPrevented) {
            return;
        }
        switch(event.key){
            case _accessibility.Keys.ARROW_UP:
            case _accessibility.Keys.ARROW_DOWN:
                event.preventDefault();
                if (opened) {
                    focusOption(focusedOptionIndex, event.key === _accessibility.Keys.ARROW_UP ? _constants.FOCUS_ACTION_PREV : _constants.FOCUS_ACTION_NEXT);
                    return;
                }
                setOpened(true);
                setFocusedOptionIndex(0);
                break;
            case _accessibility.Keys.ENTER:
                {
                    if (!opened) {
                        break;
                    }
                    if (!creatable) {
                        event.preventDefault();
                    }
                    if (focusedOptionIndex === null) {
                        break;
                    }
                    const foundOption = options[focusedOptionIndex];
                    if (!foundOption || (0, _constants.isServicePreset)(foundOption)) {
                        break;
                    }
                    event.preventDefault();
                    addOption(foundOption);
                    setFocusedOptionIndex(null);
                    clearInput();
                    closeDropdownAfterSelect && setOpened(false);
                    break;
                }
            case _accessibility.Keys.ESCAPE:
            case _accessibility.Keys.TAB:
                opened && setOpened(false);
                break;
            default:
                break;
        }
    };
    (0, _react.useEffect)(()=>{
        if (focusedOptionIndex === null) {
            setFocusedOption(null);
            return;
        }
        const foundFocusedOptionIndex = options[focusedOptionIndex];
        if (foundFocusedOptionIndex && !(0, _constants.isServicePreset)(foundFocusedOptionIndex)) {
            setFocusedOption(foundFocusedOptionIndex);
        }
    }, [
        options,
        focusedOptionIndex,
        setFocusedOption
    ]);
    const onDropdownMouseLeave = (0, _react.useCallback)(()=>{
        setFocusedOptionIndex(null);
    }, [
        setFocusedOptionIndex
    ]);
    const toggleOpened = ()=>{
        setOpened((prevOpened)=>!prevOpened);
    };
    const handleClickOutside = (0, _react.useCallback)(()=>{
        setOpened(false);
    }, [
        setOpened
    ]);
    const setOptionNode = (index, node)=>{
        optionsNodes[index] = node;
    };
    (0, _useGlobalClicks.useGlobalClicks)(handleClickOutside, opened ? rootRef : null, opened ? dropdownScrollBoxRef : null);
    const controlledStatus = status || (opened ? 'focused' : 'default');
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_FormInput.FormInput, {
        ref: (0, _refs.multipleRef)(ref, containerRef),
        header: header,
        before: before,
        status: controlledStatus,
        disabled: disabled,
        className: (0, _classNames.classNames)("tgui-6cca8a28a056cc34", className),
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_MultiselectBase.MultiselectBase, _object_spread_props._(_object_spread._({}, restProps), {
                // FormFieldProps
                ref: rootRef,
                className: "tgui-1ed7193796bd9fff",
                // Option props
                onAddChipOption: addOptionFromInput,
                onRemoveChipOption: removeOption,
                renderChip: renderChip,
                chipsValue: value,
                // Input props
                value: inputValue,
                inputRef: inputRef,
                onChange: onInputChange,
                onFocus: (0, _function.callMultiple)(handleFocus, onFocus),
                onBlur: (0, _function.callMultiple)(handleBlur, onBlur),
                onKeyDown: (0, _function.callMultiple)(handleKeyDown, onKeyDown),
                // a11y props
                role: "combobox",
                "aria-expanded": opened,
                "aria-controls": dropdownAriaId,
                "aria-haspopup": "listbox"
            })),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_chevron_down.Icon20ChevronDown, {
                "aria-hidden": true,
                onClick: toggleOpened,
                className: "tgui-e9b05eb8feaa0359"
            }),
            opened && /*#__PURE__*/ (0, _jsxruntime.jsx)(_MultiselectDropdown.MultiselectDropdown, {
                ref: dropdownScrollBoxRef,
                dropdownAriaId: dropdownAriaId,
                options: options,
                onMouseLeave: onDropdownMouseLeave,
                targetRef: rootRef,
                addOptionFromInput: ()=>addOptionFromInput(inputValue),
                setFocusedOptionIndex: setFocusedOptionIndex,
                renderOption: renderOption,
                focusedOption: focusedOption,
                value: value,
                setOptionNode: setOptionNode,
                setOpened: setOpened,
                closeDropdownAfterSelect: closeDropdownAfterSelect,
                addOption: addOption,
                clearInput: clearInput,
                focusedOptionIndex: focusedOptionIndex
            })
        ]
    });
});

//# sourceMappingURL=Multiselect.js.map
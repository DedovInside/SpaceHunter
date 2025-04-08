"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiselectDropdown", {
    enumerable: true,
    get: function() {
        return MultiselectDropdown;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _Cell = require("../../../../Blocks/Cell/Cell");
const _Popper = require("../../../../Overlays/Popper/Popper");
const _constants = require("../../hooks/constants");
const _constants1 = require("./constants");
const MultiselectDropdown = /*#__PURE__*/ (0, _react.forwardRef)(({ dropdownAriaId, options, onMouseLeave, targetRef, addOptionFromInput, setFocusedOptionIndex, renderOption = _constants1.renderOptionDefault, focusedOption, value, setOptionNode, setOpened, closeDropdownAfterSelect, addOption, focusedOptionIndex, clearInput }, ref)=>{
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Popper.Popper, {
        id: dropdownAriaId,
        ref: ref,
        targetRef: targetRef,
        onMouseLeave: onMouseLeave,
        autoUpdateOnTargetResize: true,
        role: "listbox",
        placement: "bottom",
        sameWidth: true,
        className: "tgui-70d34454bcf3c3e4",
        children: options.map((option, index)=>{
            if ((0, _constants.isEmptyOptionPreset)(option)) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Cell.Cell, {
                    readOnly: true,
                    className: "tgui-6a25d2bd42bb932c",
                    children: option.placeholder
                }, "empty");
            }
            if ((0, _constants.isCreateNewOptionPreset)(option)) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Cell.Cell, {
                    hovered: focusedOptionIndex === index,
                    onMouseDown: addOptionFromInput,
                    onMouseEnter: ()=>setFocusedOptionIndex(index),
                    children: option.actionText
                }, "new-options");
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
                children: renderOption({
                    className: "tgui-15f9ec3c119467a6",
                    hovered: focusedOption ? option.value === focusedOption.value : false,
                    children: option.label,
                    selected: value.findIndex((selectedOption)=>selectedOption.value === option.value) !== -1,
                    ref: (node)=>setOptionNode(index, node),
                    onMouseDown: (event)=>{
                        if (event.defaultPrevented) {
                            return;
                        }
                        closeDropdownAfterSelect && setOpened(false);
                        addOption(option);
                        clearInput();
                    },
                    onMouseEnter: ()=>setFocusedOptionIndex(index)
                })
            }, `${typeof option.value}-${option.label}`);
        })
    });
});

//# sourceMappingURL=MultiselectDropdown.js.map
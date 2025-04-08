import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, Fragment } from "react";
import { Cell } from "../../../../Blocks/Cell/Cell";
import { Popper } from "../../../../Overlays/Popper/Popper";
import { isCreateNewOptionPreset, isEmptyOptionPreset } from "../../hooks/constants";
import { renderOptionDefault } from "./constants";
/**
 * Renders the dropdown menu for the multiselect input, including all options and managing interactions such as selection, focus, and mouse events.
 * Utilizes the `Popper` component for positioning relative to the input field.
 */ export const MultiselectDropdown = /*#__PURE__*/ forwardRef(({ dropdownAriaId, options, onMouseLeave, targetRef, addOptionFromInput, setFocusedOptionIndex, renderOption = renderOptionDefault, focusedOption, value, setOptionNode, setOpened, closeDropdownAfterSelect, addOption, focusedOptionIndex, clearInput }, ref)=>{
    return /*#__PURE__*/ _jsx(Popper, {
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
            if (isEmptyOptionPreset(option)) {
                return /*#__PURE__*/ _jsx(Cell, {
                    readOnly: true,
                    className: "tgui-6a25d2bd42bb932c",
                    children: option.placeholder
                }, "empty");
            }
            if (isCreateNewOptionPreset(option)) {
                return /*#__PURE__*/ _jsx(Cell, {
                    hovered: focusedOptionIndex === index,
                    onMouseDown: addOptionFromInput,
                    onMouseEnter: ()=>setFocusedOptionIndex(index),
                    children: option.actionText
                }, "new-options");
            }
            return /*#__PURE__*/ _jsx(Fragment, {
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
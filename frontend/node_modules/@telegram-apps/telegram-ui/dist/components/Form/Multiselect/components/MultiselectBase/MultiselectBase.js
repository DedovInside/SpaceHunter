import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, Fragment } from "react";
import { getHorizontalSideByKey, Keys } from "../../../../../helpers/accessibility";
import { classNames } from "../../../../../helpers/classNames";
import { getHTMLElementByChildren, getHTMLElementSiblingByDirection } from "../../../../../helpers/dom";
import { useExternRef } from "../../../../../hooks/useExternalRefs";
import { isHTMLElement } from "@floating-ui/utils/dom";
import { Icon16Cancel } from "../../../../../icons/16/cancel";
import { Tappable } from "../../../../Service/Tappable/Tappable";
import { Subheadline } from "../../../../Typography/Subheadline/Subheadline";
import { getValueOptionByHTMLElement } from "./helpers/getValueOptionByHTMLElement";
import { renderChipDefault } from "./constants";
/**
 * Renders the base layout of the multiselect including the chips (selected options) and the input field.
 */ export const MultiselectBase = /*#__PURE__*/ forwardRef((_param, ref)=>{
    var { inputRef, className, // Option props
    chipsValue, onAddChipOption, onRemoveChipOption, renderChip = renderChipDefault, // Input props
    value, placeholder, disabled, readOnly } = _param, restProps = _object_without_properties(_param, [
        "inputRef",
        "className",
        "chipsValue",
        "onAddChipOption",
        "onRemoveChipOption",
        "renderChip",
        "value",
        "placeholder",
        "disabled",
        "readOnly"
    ]);
    const listRef = useExternRef(ref);
    const valueLength = chipsValue.length;
    const withPlaceholder = valueLength === 0;
    const isDisabled = disabled || readOnly;
    const handleKeyDown = (event)=>{
        const targetEl = event.target;
        const inputEl = inputRef.current;
        if (event.defaultPrevented || !inputEl || !isHTMLElement(targetEl)) {
            return;
        }
        const lastOptionIndex = valueLength - 1;
        const nextInputValue = inputEl.value;
        const isInputEl = targetEl === inputEl;
        const isInputValueEmpty = nextInputValue === '';
        switch(event.key){
            case Keys.ENTER:
                {
                    if (isInputEl && !isInputValueEmpty) {
                        event.preventDefault();
                        onAddChipOption(nextInputValue);
                    }
                    break;
                }
            case Keys.BACKSPACE:
                {
                    if (valueLength) {
                        const option = isInputEl && isInputValueEmpty ? chipsValue[lastOptionIndex] : getValueOptionByHTMLElement(chipsValue, targetEl);
                        if (!option) {
                            return;
                        }
                        event.preventDefault();
                        inputRef.current.focus();
                        onRemoveChipOption(option);
                    }
                    break;
                }
            case Keys.ARROW_UP:
            case Keys.ARROW_LEFT:
            case Keys.ARROW_DOWN:
            case Keys.ARROW_RIGHT:
                {
                    if (!valueLength || !listRef.current) {
                        break;
                    }
                    const isSelectionOnFirstLetter = inputEl.selectionStart === 0;
                    const isRightSelection = event.key === Keys.ARROW_RIGHT && isSelectionOnFirstLetter;
                    if (!isInputValueEmpty && !isSelectionOnFirstLetter || isRightSelection) {
                        break;
                    }
                    event.preventDefault();
                    let foundEl = null;
                    const horizontalSide = getHorizontalSideByKey(event.key);
                    if (isInputEl && (event.key === Keys.ARROW_UP || event.key === Keys.ARROW_LEFT)) {
                        foundEl = getHTMLElementByChildren(listRef.current.children, lastOptionIndex);
                    } else if (horizontalSide) {
                        foundEl = getHTMLElementSiblingByDirection(targetEl, horizontalSide);
                    }
                    foundEl && foundEl.focus();
                    break;
                }
            default:
                break;
        }
    };
    const handleChipRemove = (event, optionToRemove)=>{
        event.preventDefault();
        event.stopPropagation();
        onRemoveChipOption(optionToRemove);
    };
    const handleClick = ()=>{
        const isFocused = document.activeElement === inputRef.current;
        if (!isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    };
    return(// eslint-disable-next-line jsx-a11y/interactive-supports-focus
    /*#__PURE__*/ _jsxs("div", {
        ref: listRef,
        className: classNames("tgui-c56e136f855e5144", withPlaceholder && "tgui-ac1d436c45aafe04", className),
        onClick: isDisabled ? undefined : handleClick,
        role: "listbox",
        "aria-orientation": "horizontal",
        "aria-disabled": disabled,
        "aria-readonly": readOnly,
        onKeyDown: isDisabled ? undefined : handleKeyDown,
        children: [
            chipsValue.map((option, index)=>/*#__PURE__*/ _jsx(Fragment, {
                    children: renderChip({
                        children: option.label,
                        className: "tgui-991d85450550abb9",
                        value: option.value,
                        tabIndex: -1,
                        after: /*#__PURE__*/ _jsx(Tappable, {
                            Component: "div",
                            interactiveAnimation: "opacity",
                            onClick: (event)=>handleChipRemove(event, option),
                            className: "tgui-0b4134fd8d5c05ac",
                            children: /*#__PURE__*/ _jsx(Icon16Cancel, {})
                        }),
                        role: 'option',
                        'aria-selected': true,
                        'aria-posinset': index + 1,
                        'aria-setsize': valueLength
                    })
                }, `${typeof option.value}-${option.label}`)),
            /*#__PURE__*/ _jsx(Subheadline, _object_spread_props(_object_spread({
                ref: inputRef,
                "aria-autocomplete": "list",
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: false
            }, restProps), {
                Component: "input",
                type: "text",
                className: "tgui-41e02fd2529dfbd2",
                disabled: disabled,
                readOnly: readOnly,
                placeholder: withPlaceholder ? placeholder : undefined
            }))
        ]
    }));
});

//# sourceMappingURL=MultiselectBase.js.map
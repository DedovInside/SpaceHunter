"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiselectBase", {
    enumerable: true,
    get: function() {
        return MultiselectBase;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _accessibility = require("../../../../../helpers/accessibility");
const _classNames = require("../../../../../helpers/classNames");
const _dom = require("../../../../../helpers/dom");
const _useExternalRefs = require("../../../../../hooks/useExternalRefs");
const _dom1 = require("@floating-ui/utils/dom");
const _cancel = require("../../../../../icons/16/cancel");
const _Tappable = require("../../../../Service/Tappable/Tappable");
const _Subheadline = require("../../../../Typography/Subheadline/Subheadline");
const _getValueOptionByHTMLElement = require("./helpers/getValueOptionByHTMLElement");
const _constants = require("./constants");
const MultiselectBase = /*#__PURE__*/ (0, _react.forwardRef)((_param, ref)=>{
    var { inputRef, className, // Option props
    chipsValue, onAddChipOption, onRemoveChipOption, renderChip = _constants.renderChipDefault, // Input props
    value, placeholder, disabled, readOnly } = _param, restProps = _object_without_properties._(_param, [
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
    const listRef = (0, _useExternalRefs.useExternRef)(ref);
    const valueLength = chipsValue.length;
    const withPlaceholder = valueLength === 0;
    const isDisabled = disabled || readOnly;
    const handleKeyDown = (event)=>{
        const targetEl = event.target;
        const inputEl = inputRef.current;
        if (event.defaultPrevented || !inputEl || !(0, _dom1.isHTMLElement)(targetEl)) {
            return;
        }
        const lastOptionIndex = valueLength - 1;
        const nextInputValue = inputEl.value;
        const isInputEl = targetEl === inputEl;
        const isInputValueEmpty = nextInputValue === '';
        switch(event.key){
            case _accessibility.Keys.ENTER:
                {
                    if (isInputEl && !isInputValueEmpty) {
                        event.preventDefault();
                        onAddChipOption(nextInputValue);
                    }
                    break;
                }
            case _accessibility.Keys.BACKSPACE:
                {
                    if (valueLength) {
                        const option = isInputEl && isInputValueEmpty ? chipsValue[lastOptionIndex] : (0, _getValueOptionByHTMLElement.getValueOptionByHTMLElement)(chipsValue, targetEl);
                        if (!option) {
                            return;
                        }
                        event.preventDefault();
                        inputRef.current.focus();
                        onRemoveChipOption(option);
                    }
                    break;
                }
            case _accessibility.Keys.ARROW_UP:
            case _accessibility.Keys.ARROW_LEFT:
            case _accessibility.Keys.ARROW_DOWN:
            case _accessibility.Keys.ARROW_RIGHT:
                {
                    if (!valueLength || !listRef.current) {
                        break;
                    }
                    const isSelectionOnFirstLetter = inputEl.selectionStart === 0;
                    const isRightSelection = event.key === _accessibility.Keys.ARROW_RIGHT && isSelectionOnFirstLetter;
                    if (!isInputValueEmpty && !isSelectionOnFirstLetter || isRightSelection) {
                        break;
                    }
                    event.preventDefault();
                    let foundEl = null;
                    const horizontalSide = (0, _accessibility.getHorizontalSideByKey)(event.key);
                    if (isInputEl && (event.key === _accessibility.Keys.ARROW_UP || event.key === _accessibility.Keys.ARROW_LEFT)) {
                        foundEl = (0, _dom.getHTMLElementByChildren)(listRef.current.children, lastOptionIndex);
                    } else if (horizontalSide) {
                        foundEl = (0, _dom.getHTMLElementSiblingByDirection)(targetEl, horizontalSide);
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
    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        ref: listRef,
        className: (0, _classNames.classNames)("tgui-c56e136f855e5144", withPlaceholder && "tgui-ac1d436c45aafe04", className),
        onClick: isDisabled ? undefined : handleClick,
        role: "listbox",
        "aria-orientation": "horizontal",
        "aria-disabled": disabled,
        "aria-readonly": readOnly,
        onKeyDown: isDisabled ? undefined : handleKeyDown,
        children: [
            chipsValue.map((option, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
                    children: renderChip({
                        children: option.label,
                        className: "tgui-991d85450550abb9",
                        value: option.value,
                        tabIndex: -1,
                        after: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Tappable.Tappable, {
                            Component: "div",
                            interactiveAnimation: "opacity",
                            onClick: (event)=>handleChipRemove(event, option),
                            className: "tgui-0b4134fd8d5c05ac",
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_cancel.Icon16Cancel, {})
                        }),
                        role: 'option',
                        'aria-selected': true,
                        'aria-posinset': index + 1,
                        'aria-setsize': valueLength
                    })
                }, `${typeof option.value}-${option.label}`)),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_Subheadline.Subheadline, _object_spread_props._(_object_spread._({
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
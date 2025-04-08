'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useSlider", {
    enumerable: true,
    get: function() {
        return useSlider;
    }
});
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _react = require("react");
const _equal = require("../../../../helpers/equal");
const _math = require("../../../../helpers/math");
const _html = require("./helpers/html");
const _math1 = require("./helpers/math");
const _state = require("./helpers/state");
const useSlider = (_param)=>{
    var { step = 1, min = 0, max = 100, value: valueProp, multiple: multipleProp, defaultValue = multipleProp ? [
        min,
        max
    ] : min, disabled, getAriaLabel, getAriaValueText, onChange } = _param, restProps = _object_without_properties._(_param, [
        "step",
        "min",
        "max",
        "value",
        "multiple",
        "defaultValue",
        "disabled",
        "getAriaLabel",
        "getAriaValueText",
        "onChange"
    ]);
    const isControlled = valueProp !== undefined;
    const [localValue, setValue] = (0, _react.useState)(defaultValue);
    const value = (0, _react.useMemo)(()=>{
        const resolvedValue = isControlled ? valueProp : localValue;
        return Array.isArray(resolvedValue) ? [
            (0, _math.clamp)(resolvedValue[0], min, max),
            (0, _math.clamp)(resolvedValue[1], min, max)
        ] : [
            (0, _math.clamp)(resolvedValue, min, max),
            null
        ];
    }, [
        isControlled,
        valueProp,
        localValue,
        min,
        max
    ]);
    const [startValue, endValue] = value;
    const multiple = multipleProp && endValue !== null;
    const gesture = (0, _react.useRef)({
        dragging: null,
        startX: 0,
        containerWidth: 0
    }).current;
    const thumbsContainerRef = (0, _react.useRef)(null);
    const thumbStartInputRef = (0, _react.useRef)(null);
    const thumbEndInputRef = (0, _react.useRef)(null);
    const changeValue = (nextValue, event)=>{
        if (disabled || (0, _equal.isEqual)(nextValue[0], nextValue[1])) {
            return;
        }
        if (multipleProp) {
            if ((0, _state.isMultipleValues)(nextValue)) {
                !isControlled && setValue(nextValue);
                onChange && onChange(nextValue, event);
            }
        } else {
            !isControlled && setValue(nextValue[0]);
            onChange && onChange(nextValue[0], event);
        }
    };
    const handlePointerStart = (event)=>{
        if (!thumbsContainerRef.current) {
            return;
        }
        const { left: nextContainerX, width: nextContainerWidth } = thumbsContainerRef.current.getBoundingClientRect();
        if (!(event.originalEvent.target instanceof HTMLElement)) {
            return;
        }
        const foundDraggingType = (0, _html.getDraggingTypeByTargetDataset)(event.originalEvent.target);
        const nextStartX = event.startX - nextContainerX;
        const nextValue = (0, _math1.offsetXToScaledValue)(nextStartX, nextContainerWidth, min, max, step);
        const nextDragging = (0, _state.determineSnapDirection)(value, nextValue, foundDraggingType);
        gesture.dragging = nextDragging;
        gesture.containerWidth = nextContainerWidth;
        gesture.startX = nextStartX;
        const updatedInternalStateValue = (0, _state.updateInternalStateValue)(value, nextValue, min, max, nextDragging);
        const [nextStartValue, nextEndValue] = updatedInternalStateValue;
        if (thumbStartInputRef.current && (foundDraggingType === 'start' || nextStartValue !== startValue && nextEndValue === endValue)) {
            thumbStartInputRef.current.focus();
            event.originalEvent.preventDefault();
        } else if (thumbEndInputRef.current && (foundDraggingType === 'end' || nextEndValue !== endValue && nextStartValue === startValue)) {
            thumbEndInputRef.current.focus();
            event.originalEvent.preventDefault();
        }
        changeValue(updatedInternalStateValue, event);
        event.originalEvent.stopPropagation();
    };
    const handlePointerMove = (event)=>{
        const { startX, containerWidth, dragging } = gesture;
        const { shiftX = 0 } = event;
        const nextStartX = startX + shiftX;
        const nextValue = (0, _math1.offsetXToScaledValue)(nextStartX, containerWidth, min, max, step);
        changeValue((0, _state.updateInternalStateValue)(value, nextValue, min, max, dragging), event);
        event.originalEvent.stopPropagation();
        event.originalEvent.preventDefault();
    };
    const handlePointerEnd = (event)=>{
        gesture.dragging = null;
        event.originalEvent.stopPropagation();
    };
    const handleChangeByNativeInput = (event)=>{
        changeValue((0, _state.updateInternalStateByNativeChange)(value, Number(event.target.value), (0, _html.getDraggingTypeByTargetDataset)(event.target)), event);
    };
    const _extractSliderAriaAttributes = (0, _html.extractSliderAriaAttributes)(restProps), { aria } = _extractSliderAriaAttributes, restPropsWithoutArea = _object_without_properties._(_extractSliderAriaAttributes, [
        "aria"
    ]);
    const getInputProps = (isEndInput)=>{
        const index = isEndInput ? 1 : 0;
        return {
            'data-type': isEndInput ? 'end' : 'start',
            step,
            min,
            value: isEndInput && multiple ? endValue : startValue,
            max: !isEndInput && multiple ? endValue : max,
            disabled,
            'aria-label': getAriaLabel ? getAriaLabel(index) : aria.ariaLabel,
            'aria-valuetext': getAriaValueText ? getAriaValueText(startValue, index) : aria.ariaValueText,
            'aria-labelledby': aria.ariaLabelledBy,
            onChange: handleChangeByNativeInput
        };
    };
    const getStepsCoordinates = ()=>{
        if (step === 1) {
            return undefined;
        }
        const steps = [];
        const stepsCount = Math.floor((max - min) / step);
        for(let i = 0; i <= stepsCount; i += 1){
            const stepValue = min + i * step;
            const isPassed = multiple ? stepValue >= startValue && stepValue <= endValue : stepValue <= startValue;
            steps.push({
                isPassed,
                XCoordinate: (0, _math1.toPercent)(stepValue, min, max)
            });
        }
        return steps;
    };
    return {
        steps: getStepsCoordinates(),
        multiple,
        containerProps: restPropsWithoutArea,
        startValueInPercent: (0, _math1.toPercent)(startValue, min, max),
        endReversedValueInPercent: multiple ? (0, _math1.toPercent)(endValue, min, max) : 0,
        thumbsContainerRef,
        thumbStartInputRef,
        thumbEndInputRef,
        handlePointerStart,
        handlePointerMove,
        handlePointerEnd,
        getInputProps
    };
};

//# sourceMappingURL=useSlider.js.map
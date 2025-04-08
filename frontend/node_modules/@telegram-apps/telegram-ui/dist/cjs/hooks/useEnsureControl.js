/* eslint-disable @typescript-eslint/no-explicit-any */ 'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useCustomEnsuredControl: function() {
        return useCustomEnsuredControl;
    },
    useEnsuredControl: function() {
        return useEnsuredControl;
    }
});
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _react = require("react");
const _fuctions = require("../helpers/fuctions");
const _useEnhancedEffect = require("./useEnhancedEffect");
function useCustomEnsuredControl({ value, defaultValue, disabled, onChange: onChangeProp }) {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = (0, _react.useState)(defaultValue);
    const preservedControlledValueRef = (0, _react.useRef)();
    (0, _useEnhancedEffect.useEnhancedEffect)(()=>{
        preservedControlledValueRef.current = value;
    });
    const onChange = (0, _react.useCallback)((nextValue)=>{
        if (disabled) {
            return;
        }
        if ((0, _fuctions.isFunction)(nextValue)) {
            if (!isControlled) {
                setLocalValue((prevValue)=>{
                    const resolvedValue = nextValue(prevValue);
                    if (onChangeProp) {
                        onChangeProp(resolvedValue);
                    }
                    return resolvedValue;
                });
            } else if (onChangeProp) {
                const resolvedValue = nextValue(preservedControlledValueRef.current);
                onChangeProp(resolvedValue);
            }
            return;
        }
        onChangeProp && onChangeProp(nextValue);
        !isControlled && setLocalValue(nextValue);
    }, [
        disabled,
        isControlled,
        onChangeProp
    ]);
    return [
        isControlled ? value : localValue,
        onChange
    ];
}
function useEnsuredControl(_param) {
    var { onChange: onChangeProp, disabled } = _param, props = _object_without_properties._(_param, [
        "onChange",
        "disabled"
    ]);
    const [value, onChangeValue] = useCustomEnsuredControl(props);
    const onChange = (0, _react.useCallback)((e)=>{
        if (disabled) {
            return;
        }
        onChangeValue(e.target.value);
        onChangeProp && onChangeProp(e);
    }, [
        onChangeValue,
        onChangeProp,
        disabled
    ]);
    return [
        value,
        onChange
    ];
}

//# sourceMappingURL=useEnsureControl.js.map
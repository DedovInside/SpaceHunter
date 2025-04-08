/* eslint-disable @typescript-eslint/no-explicit-any */ 'use client';
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import { useCallback, useRef, useState } from "react";
import { isFunction } from "../helpers/fuctions";
import { useEnhancedEffect } from "./useEnhancedEffect";
export function useCustomEnsuredControl({ value, defaultValue, disabled, onChange: onChangeProp }) {
    const isControlled = value !== undefined;
    const [localValue, setLocalValue] = useState(defaultValue);
    const preservedControlledValueRef = useRef();
    useEnhancedEffect(()=>{
        preservedControlledValueRef.current = value;
    });
    const onChange = useCallback((nextValue)=>{
        if (disabled) {
            return;
        }
        if (isFunction(nextValue)) {
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
export function useEnsuredControl(_param) {
    var { onChange: onChangeProp, disabled } = _param, props = _object_without_properties(_param, [
        "onChange",
        "disabled"
    ]);
    const [value, onChangeValue] = useCustomEnsuredControl(props);
    const onChange = useCallback((e)=>{
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
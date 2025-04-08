import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { isServicePreset } from "../constants";
import { getNewOptionData } from "./getNewOptionData";
export const transformOptions = ({ value, inputValue = '', emptyText, creatable = false, filterFn, options: optionsProp, selectedBehavior })=>{
    const filteredOptionsProp = filterFn ? optionsProp.filter((option)=>filterFn(inputValue, option)) : optionsProp;
    if (filteredOptionsProp.length === 0) {
        if (inputValue !== '' && typeof creatable === 'string') {
            return [
                _object_spread_props(_object_spread({}, getNewOptionData('', '')), {
                    actionText: creatable
                })
            ];
        }
        return [
            _object_spread_props(_object_spread({}, getNewOptionData('', '')), {
                placeholder: emptyText
            })
        ];
    }
    if (selectedBehavior === 'hide') {
        const selected = value.map((item)=>item.value);
        return filteredOptionsProp.filter((item)=>{
            return !isServicePreset(item) ? !selected.includes(item.value) : false;
        });
    }
    return filteredOptionsProp;
};

//# sourceMappingURL=transformOptions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "transformOptions", {
    enumerable: true,
    get: function() {
        return transformOptions;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _constants = require("../constants");
const _getNewOptionData = require("./getNewOptionData");
const transformOptions = ({ value, inputValue = '', emptyText, creatable = false, filterFn, options: optionsProp, selectedBehavior })=>{
    const filteredOptionsProp = filterFn ? optionsProp.filter((option)=>filterFn(inputValue, option)) : optionsProp;
    if (filteredOptionsProp.length === 0) {
        if (inputValue !== '' && typeof creatable === 'string') {
            return [
                _object_spread_props._(_object_spread._({}, (0, _getNewOptionData.getNewOptionData)('', '')), {
                    actionText: creatable
                })
            ];
        }
        return [
            _object_spread_props._(_object_spread._({}, (0, _getNewOptionData.getNewOptionData)('', '')), {
                placeholder: emptyText
            })
        ];
    }
    if (selectedBehavior === 'hide') {
        const selected = value.map((item)=>item.value);
        return filteredOptionsProp.filter((item)=>{
            return !(0, _constants.isServicePreset)(item) ? !selected.includes(item.value) : false;
        });
    }
    return filteredOptionsProp;
};

//# sourceMappingURL=transformOptions.js.map
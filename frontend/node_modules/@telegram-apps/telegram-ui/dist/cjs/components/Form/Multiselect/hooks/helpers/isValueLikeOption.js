"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isValueLikeOption", {
    enumerable: true,
    get: function() {
        return isValueLikeOption;
    }
});
const isValueLikeOption = (value)=>typeof value === 'object' && 'value' in value;

//# sourceMappingURL=isValueLikeOption.js.map
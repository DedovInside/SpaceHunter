"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCircleAttributes", {
    enumerable: true,
    get: function() {
        return getCircleAttributes;
    }
});
const getCircleAttributes = (size)=>{
    switch(size){
        case 'large':
            return {
                size: 56,
                strokeWidth: 4,
                radius: 18
            };
        case 'medium':
            return {
                size: 36,
                strokeWidth: 3,
                radius: 14
            };
        case 'small':
            return {
                size: 28,
                strokeWidth: 3,
                radius: 10
            };
        default:
            return undefined;
    }
};

//# sourceMappingURL=getCircleAttributes.js.map
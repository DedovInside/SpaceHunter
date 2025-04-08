"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "range", {
    enumerable: true,
    get: function() {
        return range;
    }
});
const range = (startPosition, endPosition)=>{
    const length = endPosition - startPosition + 1;
    return Array.from({
        length
    }, (_, i)=>startPosition + i);
};

//# sourceMappingURL=array.js.map
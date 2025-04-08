"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getBorderRadius", {
    enumerable: true,
    get: function() {
        return getBorderRadius;
    }
});
const getBorderRadius = (size)=>{
    if (size < 40) {
        return 4;
    }
    if (size < 96) {
        return 8;
    }
    return 12;
};

//# sourceMappingURL=getBorderRadius.js.map
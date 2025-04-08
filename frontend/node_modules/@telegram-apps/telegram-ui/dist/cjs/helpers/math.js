"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "clamp", {
    enumerable: true,
    get: function() {
        return clamp;
    }
});
const clamp = (value, min, max)=>{
    return Math.max(min, Math.min(value, max));
};

//# sourceMappingURL=math.js.map
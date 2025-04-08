/* eslint-disable @typescript-eslint/no-explicit-any */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isEqual", {
    enumerable: true,
    get: function() {
        return isEqual;
    }
});
const _object = require("./object");
const isEqual = (value, other)=>{
    if (value === other) {
        return true;
    }
    if (value == null || other == null || !(0, _object.isObjectLike)(value) && !(0, _object.isObjectLike)(other)) {
        return false;
    }
    if ((0, _object.isObjectLike)(value) && (0, _object.isObjectLike)(other)) {
        if (Object.keys(value).length !== Object.keys(other).length) {
            return false;
        }
        // eslint-disable-next-line no-restricted-syntax
        for(const prop in value){
            if (Object.prototype.hasOwnProperty.call(value, prop) && Object.prototype.hasOwnProperty.call(other, prop)) {
                if (!isEqual(value[prop], other[prop])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
};

//# sourceMappingURL=equal.js.map
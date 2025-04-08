/* eslint-disable @typescript-eslint/no-explicit-any */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callMultiple", {
    enumerable: true,
    get: function() {
        return callMultiple;
    }
});
const callMultiple = (...fns)=>(...args)=>fns.filter((f)=>typeof f === 'function').forEach((f)=>f(...args));

//# sourceMappingURL=function.js.map
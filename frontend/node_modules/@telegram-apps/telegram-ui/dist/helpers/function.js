/* eslint-disable @typescript-eslint/no-explicit-any */ export const callMultiple = (...fns)=>(...args)=>fns.filter((f)=>typeof f === 'function').forEach((f)=>f(...args));

//# sourceMappingURL=function.js.map
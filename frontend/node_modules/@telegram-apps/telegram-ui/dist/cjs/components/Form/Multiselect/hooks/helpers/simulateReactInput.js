"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "simulateReactInput", {
    enumerable: true,
    get: function() {
        return simulateReactInput;
    }
});
const simulateReactInput = (target, nextValue = '')=>{
    try {
        const simulateTarget = target;
        const prevValue = simulateTarget.value;
        simulateTarget.value = nextValue;
        // eslint-disable-next-line no-underscore-dangle
        const tracker = simulateTarget._valueTracker;
        tracker === null || tracker === void 0 ? void 0 : tracker.setValue(prevValue);
        const event = new Event('input', {
            bubbles: true
        });
        target.dispatchEvent(event);
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            throw error;
        }
    }
};

//# sourceMappingURL=simulateReactInput.js.map
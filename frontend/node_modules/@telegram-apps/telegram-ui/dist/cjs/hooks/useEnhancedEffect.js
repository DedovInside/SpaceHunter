"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useEnhancedEffect", {
    enumerable: true,
    get: function() {
        return useEnhancedEffect;
    }
});
const _react = require("react");
const _dom = require("../helpers/dom");
const useEnhancedEffect = _dom.canUseDOM ? _react.useLayoutEffect : _react.useEffect;

//# sourceMappingURL=useEnhancedEffect.js.map
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useObjectMemo", {
    enumerable: true,
    get: function() {
        return useObjectMemo;
    }
});
const _react = require("react");
const _equal = require("../helpers/equal");
const useObjectMemo = (object)=>{
    const cache = (0, _react.useRef)(object);
    if (!(0, _equal.isEqual)(cache.current, object)) {
        cache.current = object;
    }
    return cache.current;
};

//# sourceMappingURL=useObjectMemo.js.map
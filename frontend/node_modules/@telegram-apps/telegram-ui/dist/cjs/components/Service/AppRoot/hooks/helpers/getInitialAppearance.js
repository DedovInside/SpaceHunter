"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getInitialAppearance", {
    enumerable: true,
    get: function() {
        return getInitialAppearance;
    }
});
const _dom = require("../../../../../helpers/dom");
const getInitialAppearance = ()=>{
    if (_dom.canUseDOM && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

//# sourceMappingURL=getInitialAppearance.js.map
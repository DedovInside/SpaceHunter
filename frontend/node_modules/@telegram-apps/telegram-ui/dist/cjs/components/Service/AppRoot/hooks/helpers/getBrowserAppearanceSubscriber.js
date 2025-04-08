"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getBrowserAppearanceSubscriber", {
    enumerable: true,
    get: function() {
        return getBrowserAppearanceSubscriber;
    }
});
const _dom = require("../../../../../helpers/dom");
const getBrowserAppearanceSubscriber = (setAppearance)=>{
    if (!_dom.canUseDOM || !window.matchMedia) {
        return ()=>{};
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = ()=>{
        setAppearance(mediaQuery.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', listener);
    return ()=>mediaQuery.removeEventListener('change', listener);
};

//# sourceMappingURL=getBrowserAppearanceSubscriber.js.map
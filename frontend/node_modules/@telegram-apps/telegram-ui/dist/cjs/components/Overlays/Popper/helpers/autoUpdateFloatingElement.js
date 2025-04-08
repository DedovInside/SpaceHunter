"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "autoUpdateFloatingElement", {
    enumerable: true,
    get: function() {
        return autoUpdateFloatingElement;
    }
});
const _object_spread = require("@swc/helpers/_/_object_spread");
const _object_spread_props = require("@swc/helpers/_/_object_spread_props");
const _object_without_properties = require("@swc/helpers/_/_object_without_properties");
const _reactdom = require("@floating-ui/react-dom");
const _dom = require("@floating-ui/utils/dom");
const defaultOptions = {
    ancestorScroll: true,
    ancestorResize: true,
    elementResize: false,
    animationFrame: false
};
const autoUpdateFloatingElement = (reference, floating, update, options = defaultOptions)=>{
    const { elementResize = false } = options, restOptions = _object_without_properties._(options, [
        "elementResize"
    ]);
    const autoUpdateLibDisposer = (0, _reactdom.autoUpdate)(reference, floating, update, _object_spread_props._(_object_spread._({}, restOptions), {
        elementResize: false
    }));
    let observer = null;
    if (elementResize) {
        let initialUpdate = true;
        observer = new MutationObserver(()=>{
            if (!initialUpdate) {
                update();
            }
            initialUpdate = false;
        });
        if ((0, _dom.isHTMLElement)(reference)) {
            observer.observe(reference, {
                childList: true,
                subtree: true
            });
        }
        observer.observe(floating, {
            childList: true,
            subtree: true
        });
    }
    return ()=>{
        if (observer !== null) {
            observer.disconnect();
            observer = null;
        }
        autoUpdateLibDisposer();
    };
};

//# sourceMappingURL=autoUpdateFloatingElement.js.map